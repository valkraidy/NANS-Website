import { createFileRoute } from "@tanstack/react-router";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { useState } from "react";
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

function RequiredMark() {
  return <span className="text-red-500">*</span>;
}

function DatePickerField({
  label,
  required,
  value,
  onChange,
}: {
  label: string;
  required?: boolean;
  value?: Date;
  onChange: (date?: Date) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label} {required ? <RequiredMark /> : null}
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between px-4 py-2 h-10 font-normal"
          >
            {value ? format(value, "PPP") : <span className="text-muted-foreground">Pick a date</span>}
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Prepare data for Google Sheets
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
      };

      // For now, we'll just log it - we'll connect to Google Sheets later
      console.log("Form Data:", submissionData);

      // Simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        type: "success",
        message: "Application submitted successfully! We'll contact you soon.",
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
      console.error("Submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or contact support.",
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
              <label className="block text-sm font-medium mb-2">
                Full Name <RequiredMark />
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="e.g. Kwame Boateng"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            {/* Memebership card */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Membership Card ID Number <RequiredMark />
              </label>
              <input
                type="text"
                name="membershipId"
                required
                placeholder="Enter your membership ID"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                value={formData.membershipId}
                onChange={handleInputChange}
              />
            </div>

            {/* Contacts */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Active Call Contact <RequiredMark />
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  placeholder="+233 ..."
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  WhatsApp Contact <RequiredMark />
                </label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  required
                  placeholder="+233 ..."
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  value={formData.whatsappNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address <RequiredMark />
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email@example.com"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Gender */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Gender <RequiredMark />
                </label>
                <Select value={formData.gender} onValueChange={(value) => handleRadioChange("gender", value)}>
                  <SelectTrigger className="w-full h-10 px-4 py-2 rounded-lg border border-input bg-background">
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
                <label className="block text-sm font-medium mb-2">
                  Home Town/Community in Nzema <RequiredMark />
                </label>
                <input
                  type="text"
                  name="hometown"
                  required
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
              <label className="block text-sm font-medium mb-2">
                Name of Institution / Chapter <RequiredMark />
              </label>
              <input
                type="text"
                name="institution"
                required
                placeholder="e.g. University of Ghana / Accra Chapter"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                value={formData.institution}
                onChange={handleInputChange}
              />
            </div>

            {/* Program Of Study */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Programme of Study <RequiredMark />
              </label>
              <input
                type="text"
                name="programme"
                required
                placeholder="e.g. BSc. Computer Science"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                value={formData.programme}
                onChange={handleInputChange}
              />
            </div>

            {/* Current Level */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Current Level <RequiredMark />
              </label>
              <Select
                value={formData.currentLevel}
                onValueChange={(value) => handleRadioChange("currentLevel", value)}
              >
                <SelectTrigger className="w-full h-10 px-4 py-2 rounded-lg border border-input bg-background">
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
                label="Proposed Start Date"
                required
                value={startDateValue}
                onChange={(date) => handleDateChange("startDate", date)}
              />
              <DatePickerField
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
              <label className="block text-sm font-medium mb-2">
                Preferred Company / Institution in Nzema <RequiredMark />
              </label>
              <input
                type="text"
                name="preferredCompany"
                required
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
              <label className="block text-sm font-medium mb-2">
                Additional Comments or Special Requests
              </label>
              <textarea
                name="additionalComments"
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
            className="w-full py-3 px-4 bg-[color:var(--nans-green)] text-white rounded-lg font-medium hover:bg-[color:var(--nans-green-deep)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </SiteShell>
  );
}
