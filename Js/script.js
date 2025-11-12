const card = {
    title: "Get Hired Fast",
    description: "Master job-ready skills in 6 months. Expert mentors. Real projects. Guaranteed Results.",
    features: [
        "95% job placement rate",
        "Start from N15,000/month",
        "6 specialized tracks",
        "1-on-1 mentorship sessions",
    ]

}

document.getElementById("ghf").innerText = card.title;
document.getElementById("description").innerHTML = card.description;
const featuresContainer = document.getElementById("feat");