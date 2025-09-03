import mongoose from "mongoose";

const resumeSchema = mongoose.Schema(
  {
    resumeId: {
      type: String,
      required: true,
      unique: true,
    },

    resumeTitle: { type: String, required: true },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    personalInfo: {
      first_name: String,
      last_name: String,
      job_title: String,
      job_title: String,
      email: String,
      phone: String,
      address: String,
      linkedin: String,
      github: String,
      summary: String,
    },

    skills: [
      {
        name: { type: String, required: true },
        percentage: { type: String, required: true },
      },
    ],

    experience: [
      {
        job_title: {
          type: String,
          required: true,
        },
        company: {
          type: String,
          required: true,
        },
        location: {
          type: String,
          required: true,
        },
        start_date: {
          type: String,
          required: true,
        },
        end_date: {
          type: String,
          required: true,
        },
        responsibilities: [
          {
            type: String,
            required: true,
          },
        ],
      },
    ],

    projects: [
      {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        technologies: [
          {
            type: String,
            required: true,
          },
        ],
        link: {
          type: String,
          required: true,
        },
      },
    ],

    education: [
      {
        degree: {
          type: String,
          required: true,
        },
        institution: {
          type: String,
          required: true,
        },
        location: [
          {
            type: String,
            required: true,
          },
        ],
        start_year: {
          type: String,
          required: true,
        },
        start_year: {
          type: String,
          required: true,
        },
        end_year: {
          type: String,
          required: true,
        },
      },
    ],

    certifications: [
      {
        name: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

export const resumeInfomodel = mongoose.model("resumeInfo", resumeSchema);
