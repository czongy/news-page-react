export const calculateTimeLapsed = (timestamp) => {
  const now = new Date();
  const then = new Date(timestamp);
  const diffInSeconds = Math.floor((now - then) / 1000);

  const years = Math.floor(diffInSeconds / (60 * 60 * 24 * 365));
  const months = Math.floor(diffInSeconds / (60 * 60 * 24 * 30));
  const days = Math.floor(diffInSeconds / (60 * 60 * 24));
  const hours = Math.floor((diffInSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
  const seconds = diffInSeconds % 60;

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  if (seconds > 0) return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
};

export const convertSlugToReadableString = (slug) => {
  return slug
    .replace(/-/g, ' ')  // Replace hyphens with spaces
    .replace(/\b\w/g, char => char.toUpperCase());  // Capitalize the first letter of each word
}

export const convertToCamelCase = (slug) => {
  return slug
    .replace(/-./g, match => match.charAt(1).toUpperCase())  // Convert character after hyphen to uppercase
    .replace(/-/g, '');  // Remove the hyphen
}

export const convertToReadableDate = (date) => {
  const isoDate = new Date(date);
  const options = { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: true 
  };
  return isoDate.toLocaleDateString('en-US', options);
}

export const getCurrentDateFormatted = () => {
  const currentDate = new Date();
  const options = { weekday: 'long', day: '2-digit', month: 'long' };
  return new Intl.DateTimeFormat('en-SG', options).format(currentDate);
}


