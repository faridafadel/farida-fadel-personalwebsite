// 1. API Integration (Quotes API)
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("newQuoteBtn");

async function getQuote() {
    quoteText.textContent = "Fetching inspiration...";
    quoteAuthor.textContent = "";

    const fallbackQuotes = [
        { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { content: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
        { content: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
        { content: "Identify your problems, but give your power and energy to solutions.", author: "Tony Robbins" }
    ];

    try {
        const response = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random"));
        
        if (!response.ok) throw new Error("API Network response was not ok");
        
        const wrapper = await response.json();
        const data = JSON.parse(wrapper.contents); 
        
        if (data && data[0]) {
          
            quoteAuthor.textContent = `- ${data[0].a}`;
            console.log("Quote loaded from API.");
        } else {
            throw new Error("API data format unexpected");
        }

    } catch (error) {
        console.warn("External API failed. Using fallback quote.", error);
        
        const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
        const backupQuote = fallbackQuotes[randomIndex];
        
        quoteText.textContent = `"${backupQuote.content}"`;
        quoteAuthor.textContent = `- ${backupQuote.author} (Offline Mode)`;
    }
}

window.addEventListener("DOMContentLoaded", getQuote);
newQuoteBtn.addEventListener("click", getQuote);

// 2. Dark Mode Toggle (UX Enhancement)
document.getElementById("modeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// 3. Add Skill Logic (Maintain Previous Work)
document.getElementById("addSkill").addEventListener("click", () => {
    const input = document.getElementById("newSkill");
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        document.getElementById("skillsList").appendChild(li);
        input.value = "";
    }
});

// 4. Contact Form Logic
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.getElementById("formMessage");
    msg.textContent = "Message sent successfully!";
    msg.style.color = "green";
});
