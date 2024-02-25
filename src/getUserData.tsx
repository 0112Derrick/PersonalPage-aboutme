export async function fetchUserIP() {
  let ipAddress = "";
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      ipAddress = data.ip;
    } else {
      console.log("Failed to fetch ip address");
    }
    return ipAddress;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
}
