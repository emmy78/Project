document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const satisfaction = document.querySelector('input[name="satisfaction"]:checked');
    const recommend = document.querySelector('input[name="recommend"]:checked');
    const comments = document.querySelector('textarea[name="comments"]').value;

    let resultHTML = "<h2>Your Responses:</h2>";

    if (satisfaction) {
        resultHTML += `<p><strong>Satisfaction:</strong> ${satisfaction.value}</p>`;
    } else {
        resultHTML += `<p><strong>Satisfaction:</strong> Not answered</p>`;
    }

    if (recommend) {
        resultHTML += `<p><strong>Recommend:</strong> ${recommend.value}</p>`;
    } else {
        resultHTML += `<p><strong>Recommend:</strong> Not answered</p>`;
    }

    resultHTML += `<p><strong>Comments:</strong> ${comments || "No comments"}</p>`;

    document.getElementById("result").innerHTML = resultHTML;
});
