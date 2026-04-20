type AppointmentPayload = {
  fullName: string;
  phone: string;
  email?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
};

const env = (
  import.meta as ImportMeta & {
    env?: {
      VITE_API_URL?: string;
    };
  }
).env;

const BASE_URL = env?.VITE_API_URL ?? "http://localhost:5000/api";

export const createAppointment = async (data: AppointmentPayload) => {
  const response = await fetch(`${BASE_URL}/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to create appointment");
  }

  return response.json();
};
