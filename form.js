/*
3. Create new Cards
The data entered into the form by users should be used to create a new question, that will be displayed as a card like the other questions.

Listen the form's submit event
Prevent the default submit behavior to handle everything within JavaScript
Read all entered data from the input fields (question, answer, tags)
Generate all DOM element for a card with createElement()
Insert the form's data as text into the DOM elements
Append the card to the page, directly below the form
❗️ For now the new card should be displayed directly below the form. Adding the card to the list of the other cards is a topic for later.

Note: To avoid error messages, we recommend creating a new JavaScript file specifically for your form page. This ensures that any event listeners you've added for other pages won't cause problems with HTML elements that aren't present on the form page.
*/
//  Count Characters  //
const questionTextarea = document.querySelector('[data-js="question"]');
const answerTextarea = document.querySelector('[data-js="answer"]');
const questionTextCount = document.querySelector(
  '[data-js="question-text-count"]'
);
const answerTextCount = document.querySelector('[data-js="answer-text-count"]');

function updateTextCount(textarea, textCountSpan) {
  const maxLength = textarea.maxLength;
  const currentLength = textarea.value.length;
  textCountSpan.textContent = `${maxLength - currentLength} characters left`;
}

questionTextarea.addEventListener("input", () =>
  updateTextCount(questionTextarea, questionTextCount)
);
answerTextarea.addEventListener("input", () =>
  updateTextCount(answerTextarea, answerTextCount)
);
// end Count Characters //

const form = document.querySelector('[data-js="question-form"]');
const newCardContainer = document.querySelector(
  '[data-js="new-card-container"]'
);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const question = document.querySelector('[data-js="question"]').value;
  const answer = document.querySelector('[data-js="answer"]').value;
  const tag = document.querySelector('[data-js="tag"]').value;

  // Create a new card //
  const card = document.createElement("article");
  card.classList.add("card");

  const questionElement = document.createElement("h2");
  questionElement.classList.add("content");
  questionElement.textContent = question;

  const answerContainer = document.createElement("div");
  answerContainer.classList.add("container");

  const toggleButton = document.createElement("button");
  toggleButton.classList.add("toggle-button");
  toggleButton.textContent = "Toggle Answer";
  toggleButton.addEventListener("click", () => {
    answerElement.classList.toggle("show-answer");
  });

  const answerElement = document.createElement("p");
  answerElement.classList.add("answer");
  answerElement.textContent = answer;

  answerContainer.appendChild(toggleButton);
  answerContainer.appendChild(answerElement);

  const tagList = document.createElement("ul");
  tagList.classList.add("tags");

  const tagItem = document.createElement("li");
  const tagLink = document.createElement("a");
  tagLink.classList.add("hashtag-frontend");
  tagLink.href = "#";
  tagLink.textContent = `#${tag}`;

  tagItem.appendChild(tagLink);
  tagList.appendChild(tagItem);

  card.appendChild(questionElement);
  card.appendChild(answerContainer);
  card.appendChild(tagList);

  newCardContainer.appendChild(card);

  form.reset();
});
