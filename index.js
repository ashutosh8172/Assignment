// Smooth scrolling when clicking on navbar links
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
// Smooth scrolling when clicking on navbar links
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Dummy job listings data (replace with real data from database or API)
const jobs = [
  {
    title: "Software Engineer",
    company: "ABC Tech Solutions",
    location: "New York, USA",
    description:
      "We are looking for a skilled software engineer to join our team...",
    date: "July 30, 2023",
  },
  {
    title: "Product Manager",
    company: "XYZ Innovations",
    location: "San Francisco, USA",
    description:
      "We are hiring an experienced product manager to lead our product team...",
    date: "July 29, 2023",
  },
  {
    title: "Data Scientist",
    company: "Data Insights Ltd.",
    location: "London, UK",
    description:
      "We are seeking a talented data scientist to work on exciting projects...",
    date: "July 28, 2023",
  },
];

// Function to filter job titles as the user types
function filterJobTitles(event) {
  const jobTitleInput = event.target.value.toLowerCase();
  const jobTitleSuggestions = jobs
    .map((job) => job.title.toLowerCase())
    .filter((title) => title.includes(jobTitleInput));

  const suggestionsDiv = document.getElementById("job-title-suggestions");
  suggestionsDiv.innerHTML = "";

  jobTitleSuggestions.forEach((title) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.classList.add("suggestion-item");
    suggestionItem.textContent = title;
    suggestionItem.addEventListener("click", () => {
      document.getElementById("jobTitle").value = title;
      suggestionsDiv.innerHTML = "";
    });
    suggestionsDiv.appendChild(suggestionItem);
  });
}

// Function to search jobs with location filter
function searchJobs(event) {
  event.preventDefault();

  const jobTitle = document.getElementById("jobTitle").value.toLowerCase();
  const location = document.getElementById("location").value.toLowerCase();

  const filteredJobs = jobs.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(jobTitle);
    const locationMatch = job.location.toLowerCase().includes(location);
    return titleMatch && locationMatch;
  });

  // Display filtered job listings in the job search results section
  const jobSearchResultsSection = document.getElementById("job-search-results");
  let html = "";

  if (filteredJobs.length === 0) {
    html = "<p>No jobs found for the specified criteria.</p>";
  } else {
    filteredJobs.forEach((job) => {
      html += `
            <div class="job-listing">
              <h4>${job.title}</h4>
              <p><strong>Company:</strong> ${job.company}</p>
              <p><strong>Location:</strong> ${job.location}</p>
              <p>${job.description}</p>
              <p><strong>Date:</strong> ${job.date}</p>
            </div>
          `;
    });
  }

  jobSearchResultsSection.innerHTML = html;
}
