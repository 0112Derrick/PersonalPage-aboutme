
function getCookie(name: any) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
}

function setCookie(name: any, value: any, days: number) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

export default function checkFormSubmissionLimit() {
  const submissionLimit = 3;
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  const cookieValue = getCookie("formSubmissions");
  let submissions = cookieValue ? JSON.parse(cookieValue) : {};

  if (!submissions.date || submissions.date !== today) {
    submissions = { date: today, count: 0 }; // Reset submission count for a new day
  }

  if (submissions.count < submissionLimit) {
    // Allow form submission
    submissions.count++;
    setCookie("formSubmissions", JSON.stringify(submissions), 1); // Cookie expires in 1 day
    return true;
  } else {
    // Reject form submission
    return false;
  }
}