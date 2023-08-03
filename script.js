// JavaScript code for capturing user ID cookie and tracking activity
function generateUserId() {
  // Generate a random user ID (you can use a more sophisticated method for this in a real application)
  return 'user_' + Math.random().toString(36).substr(2, 9);
}

function setUserIdCookie() {
  const userId = generateUserId();
  document.cookie = `user_id=${userId}; max-age=2592000; path=/;`;
  // Set the cookie with the name 'user_id', valid for 30 days (30 days * 24 hours * 60 minutes * 60 seconds = 2592000 seconds)
  // The cookie is accessible from the entire website (path=/)
}

function trackActivity(activity) {
  // Here, you can perform various actions to track the user's activity.
  // For this example, we will log the activity to the console.
  console.log(`User activity: ${activity}`);
}

if(document.getElementById("nextPageBtn")) {
	document.getElementById("nextPageBtn").addEventListener("click", () => {
		// Track 'Next Page' button click activity
		trackActivity('Clicked Next Page button');
		// Redirect to the details.html page
		window.location.href = "details.html";
	});
}

if(document.getElementById("aboutBtn")) {
	document.getElementById("aboutBtn").addEventListener("click", () => {
		// Track 'About Section' button click activity
		trackActivity('Clicked About Section button');
		// Redirect to the about.html page
		window.location.href = "about.html";
	});
}

// Set the user ID cookie when the page loads
setUserIdCookie();

// JavaScript code for IP address tracking
async function getIpAddress() {
  try {
    const response = await fetch('https://ipinfo.io/json');
    const data = await response.json();
	  console.log(data.ip);
    return data.ip || 'Unknown';
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return 'Unknown';
  }
}

async function trackIpAddress() {
  const ipAddress = await getIpAddress();
  console.log('User IP address:', ipAddress);
}

// Call the trackIpAddress() function when the page loads
trackIpAddress();


// JavaScript code for capturing user ID cookie and tracking activity
// ... (existing code for generating user ID, setting cookies, and tracking activity)

// JavaScript code for IP address tracking (if needed)
// ... (existing code for fetching and tracking IP address)

// Function to get user browser information
function getBrowserInfo() {
  const browserInfo = {
    browserName: navigator.appName,
    browserVersion: navigator.appVersion,
    userAgent: navigator.userAgent,
  };
  return browserInfo;
}

// Function to get screen dimensions
function getScreenDimensions() {
  const screenDimensions = {
    screenWidth: screen.width,
    screenHeight: screen.height,
    screenAvailWidth: screen.availWidth,
    screenAvailHeight: screen.availHeight,
  };
  return screenDimensions;
}

// Function to get user system information
function getSystemInfo() {
  const systemInfo = {
    osName: navigator.platform,
    language: navigator.language,
    cookieEnabled: navigator.cookieEnabled,
    online: navigator.onLine,
    doNotTrack: navigator.doNotTrack,
    connectionType: navigator.connection ? navigator.connection.effectiveType : 'Unknown',
  };
  return systemInfo;
}

// Call the functions and log the information when the page loads
window.onload = function() {
  const browserInfo = getBrowserInfo();
  console.log('Browser Information:', browserInfo);

  const screenDimensions = getScreenDimensions();
  console.log('Screen Dimensions:', screenDimensions);

  const systemInfo = getSystemInfo();
  console.log('System Information:', systemInfo);

};


let clickCount = parseInt(localStorage.getItem("clickCount")) || 0;

const data = {
	browserInfo: getBrowserInfo(),
	screenDimensions: getScreenDimensions(),
	systemInfo: getSystemInfo()
};
console.log(data);
fetch("https://tracking-data.vercel.app/trackdata/", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});

// Function to handle button clicks and change color after 3 clicks
function handleButtonClick() {
  clickCount++;
  console.log(`Button clicked ${clickCount} time(s).`);

  // Check if the click count is equal to 3
  if (clickCount === 3) {
    // Change the button color to yellow
    const button = document.getElementById("nextPageBtn");
    button.style.backgroundColor = "yellow";
    console.log("Button color changed to yellow.");
  }

  // Store the updated click count in local storage
  localStorage.setItem("clickCount", clickCount);
}

// Add the click event listener to the button
if(document.getElementById("nextPageBtn")){
	document.getElementById("nextPageBtn").addEventListener("click", handleButtonClick);
}