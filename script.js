const main = document.querySelector('main');

const heading = "My Jokes"
const joke1 = "Why do we tell actors to break a leg?"
const joke1Answer = "Because every play has a cast."
const joke2 = "Why did the gym close down?"
const joke2Answer = "It just didn't work out."
const joke3 = "How does a rabbi make coffee?"
const joke3Answer = "Hebrews it."

var paragraph = document.createElement("p");
paragraph.innerHTML = "That's all folks!"

const template = `
    <h1>${heading} </h1>
    <ul>
        <li>${joke1} ${joke1Answer}</li>
        <li>${joke2} ${joke2Answer}</li>
        <li>${joke3} ${joke3Answer}</li>
    </ul>
`;

main.innerHTML = template;
main.appendChild(paragraph);
