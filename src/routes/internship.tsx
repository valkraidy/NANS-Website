import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";

const internshipSubmissionSchema = z.object({
  fullName: z.string().min(1),
  membershipId: z.string().min(1),
  phoneNumber: z.string().min(1),
  whatsappNumber: z.string().min(1),
  email: z.string().email(),
  gender: z.string().min(1),
  hometown: z.string().min(1),
  institution: z.string().min(1),
  programme: z.string().min(1),
  currentLevel: z.string().min(1),
  startDate: z.string().min(1),
  endDate: z.string().min(1),
  preferredCompany: z.string().min(1),
  acceptAlternative: z.string().min(1),
  hasExperience: z.string().min(1),
  additionalComments: z.string(),
});

type InternshipSubmission = z.infer<typeof internshipSubmissionSchema>;

const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzu7a10CABiSBshHbR9T8MnfloetLgV4N-FkXnlViN1YdLnRR7hhdo3ryGKv0ZzWBtO/exec";

const submitInternshipApplication = createServerFn({ method: "POST" })
  .inputValidator((data: InternshipSubmission) => internshipSubmissionSchema.parse(data))
  .handler(async ({ data }) => {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });

    const responseText = await response.text();

    let parsedResponse: { success?: boolean; message?: string; error?: string };

    try {
      parsedResponse = JSON.parse(responseText);
    } catch {
      throw new Error("The sheet service returned an unreadable response.");
    }

    if (parsedResponse.success === false) {
      throw new Error(parsedResponse.error || parsedResponse.message || "Your application was not saved.");
    }

    return {
      message: parsedResponse.message || "Application submitted successfully! We'll contact you soon.",
    };
  });

function RequiredMark() {
  return <span className="text-red-500">*</span>;
}

function DatePickerField({
  id,
  label,
  required,
  value,
  onChange,
}: {
  id: string;
  label: string;
  required?: boolean;
  value?: Date;
  onChange: (date?: Date) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label} {required ? <RequiredMark /> : null}
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id={id}
            type="button"
            variant="outline"
            className="w-full justify-between px-4 py-2 h-10 font-normal"
          >
            {value ? (
              format(value, "PPP")
            ) : (
              <span className="text-muted-foreground">Pick a date</span>
            )}
            <CalendarIcon className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={value} onSelect={onChange} initialFocus />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export const Route = createFileRoute("/internship")({
  component: RouteComponent,
});

function RouteComponent() {
  const [formData, setFormData] = useState({
    // PERSONAL INFORMATION
    fullName: "",
    membershipId: "",
    phoneNumber: "",
    whatsappNumber: "",
    email: "",
    gender: "",
    hometown: "",

    // ACADEMIC INFORMATION
    institution: "",
    programme: "",
    currentLevel: "",
    startDate: "",
    endDate: "",

    // INTERNSHIP PLACEMENT PREFERENCE
    preferredCompany: "",
    acceptAlternative: "", // "yes" or "no"
    hasExperience: "", // "yes" or "no"
    additionalComments: "",
  });

  const [startDateValue, setStartDateValue] = useState<Date>();
  const [endDateValue, setEndDateValue] = useState<Date>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (field: "startDate" | "endDate", date?: Date) => {
    if (field === "startDate") {
      setStartDateValue(date);
    } else {
      setEndDateValue(date);
    }

    setFormData((prev) => ({
      ...prev,
      [field]: date ? format(date, "yyyy-MM-dd") : "",
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !formData.gender ||
      !formData.currentLevel ||
      !formData.acceptAlternative ||
      !formData.hasExperience ||
      !startDateValue ||
      !endDateValue
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please complete all required fields before submitting.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await submitInternshipApplication({ data: formData });

      setSubmitStatus({
        type: "success",
        message: result.message,
      });

      // Reset form
      setFormData({
        fullName: "",
        membershipId: "",
        phoneNumber: "",
        whatsappNumber: "",
        email: "",
        gender: "",
        hometown: "",
        institution: "",
        programme: "",
        currentLevel: "",
        startDate: "",
        endDate: "",
        preferredCompany: "",
        acceptAlternative: "",
        hasExperience: "",
        additionalComments: "",
      });
      setStartDateValue(undefined);
      setEndDateValue(undefined);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again or contact support.";

      console.error("Submission error:", error);
      setSubmitStatus({
        type: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SiteShell>
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Internship Application</h1>
        <p className="text-muted-foreground mb-8">
          Fill in your details to apply for the internship program
        </p>

        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg mb-6 ${
              submitStatus.type === "success"
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* ===== SECTION 1: PERSONAL INFORMATION ===== */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold border-b pb-2">Personal Information</h2>

            {/* Full name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                Full Name <RequiredMark />
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                autoComplete="name"
                placeholder="e.g. Kwame Boateng"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            {/* Memebership card */}
            <div>
              <label htmlFor="membershipId" className="block text-sm font-medium mb-2">
                Membership Card ID Number <RequiredMark />
              </label>
              <input
                id="membershipId"
                type="text"
                name="membershipId"
                required
                autoComplete="off"
                placeholder="Enter your membership ID"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                value={formData.membershipId}
                onChange={handleInputChange}
              />
            </div>

            {/* Contacts */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2">
                  Active Call Contact <RequiredMark />
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  required
                  autoComplete="tel"
                  placeholder="+233 ..."
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="whatsappNumber" className="block text-sm font-medium mb-2">
                  WhatsApp Contact <RequiredMark />
                </label>
                <input
                  id="whatsappNumber"
                  type="tel"
                  name="whatsappNumber"
                  required
                  autoComplete="tel"
                  placeholder="+233 ..."
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  value={formData.whatsappNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address <RequiredMark />
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="email@example.com"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Gender */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="gender" className="block text-sm font-medium mb-2">
                  Gender <RequiredMark />
                </label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) => handleRadioChange("gender", value)}
                >
                  <SelectTrigger
                    id="gender"
                    className="w-full h-10 px-4 py-2 rounded-lg border border-input bg-background"
                  >
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="hometown" className="block text-sm font-medium mb-2">
                  Home Town/Community in Nzema <RequiredMark />
                </label>
                <input
                  id="hometown"
                  type="text"
                  name="hometown"
                  required
                  autoComplete="address-level2"
                  placeholder="e.g. Axim, Half Assini"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  value={formData.hometown}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* ===== SECTION 2: ACADEMIC INFORMATION ===== */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold border-b pb-2">Academic Information</h2>

            {/* Institution */}
            <div>
              <label htmlFor="institution" className="block text-sm font-medium mb-2">
                Name of Institution / Chapter <RequiredMark />
              </label>
              <input
                id="institution"
                type="text"
                name="institution"
                required
                autoComplete="organization"
                placeholder="e.g. University of Ghana / Accra Chapter"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                value={formData.institution}
                onChange={handleInputChange}
              />
            </div>

            {/* Program Of Study */}
            <div>
              <label htmlFor="programme" className="block text-sm font-medium mb-2">
                Programme of Study <RequiredMark />
              </label>
              <input
                id="programme"
                type="text"
                name="programme"
                required
                autoComplete="off"
                placeholder="e.g. BSc. Computer Science"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                value={formData.programme}
                onChange={handleInputChange}
              />
            </div>

            {/* Current Level */}
            <div>
              <label htmlFor="currentLevel" className="block text-sm font-medium mb-2">
                Current Level <RequiredMark />
              </label>
              <Select
                value={formData.currentLevel}
                onValueChange={(value) => handleRadioChange("currentLevel", value)}
              >
                <SelectTrigger
                  id="currentLevel"
                  className="w-full h-10 px-4 py-2 rounded-lg border border-input bg-background"
                >
                  <SelectValue placeholder="Select your current level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100">100 Level</SelectItem>
                  <SelectItem value="200">200 Level</SelectItem>
                  <SelectItem value="300">300 Level</SelectItem>
                  <SelectItem value="400">400 Level</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Dates */}
            <div className="grid gap-5 sm:grid-cols-2">
              <DatePickerField
                id="startDate"
                label="Proposed Start Date"
                required
                value={startDateValue}
                onChange={(date) => handleDateChange("startDate", date)}
              />
              <DatePickerField
                id="endDate"
                label="Proposed End Date"
                required
                value={endDateValue}
                onChange={(date) => handleDateChange("endDate", date)}
              />
            </div>
          </div>

          {/* ===== SECTION 3: INTERNSHIP PLACEMENT PREFERENCE ===== */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold border-b pb-2">Internship Placement Preference</h2>

            {/* Preferred Company */}
            <div>
              <label htmlFor="preferredCompany" className="block text-sm font-medium mb-2">
                Preferred Company / Institution in Nzema <RequiredMark />
              </label>
              <input
                id="preferredCompany"
                type="text"
                name="preferredCompany"
                required
                autoComplete="off"
                placeholder="e.g. Any company in Nzema"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                value={formData.preferredCompany}
                onChange={handleInputChange}
              />
            </div>

            {/* Unavalibility other preference */}
            <div>
              <label className="block text-sm font-medium mb-3">
                If your preferred company is unavailable, would you accept placement in another
                company within Nzema? <RequiredMark />
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="acceptAlternative"
                    value="yes"
                    checked={formData.acceptAlternative === "yes"}
                    onChange={(e) => handleRadioChange("acceptAlternative", e.target.value)}
                    className="w-4 h-4"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="acceptAlternative"
                    value="no"
                    checked={formData.acceptAlternative === "no"}
                    onChange={(e) => handleRadioChange("acceptAlternative", e.target.value)}
                    className="w-4 h-4"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            {/* Previous Experience */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Do you have any previous internship or work experience? <RequiredMark />
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasExperience"
                    value="yes"
                    checked={formData.hasExperience === "yes"}
                    onChange={(e) => handleRadioChange("hasExperience", e.target.value)}
                    className="w-4 h-4"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasExperience"
                    value="no"
                    checked={formData.hasExperience === "no"}
                    onChange={(e) => handleRadioChange("hasExperience", e.target.value)}
                    className="w-4 h-4"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            {/* Additional Comments */}
            <div>
              <label htmlFor="additionalComments" className="block text-sm font-medium mb-2">
                Additional Comments or Special Requests
              </label>
              <textarea
                id="additionalComments"
                name="additionalComments"
                autoComplete="off"
                placeholder="Any additional information you'd like to share..."
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background resize-none"
                value={formData.additionalComments}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-nans-green text-white rounded-lg font-medium hover:bg-nans-green-deep disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </SiteShell>
  );
}
