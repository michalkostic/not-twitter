const SAMPLE_MESSAGES = [
    {
        "avatar": "images/person-circle.svg",
        "text": `You gotta smoke test your hypothesis to gain traction. Social currency problem territories, but
                pre launch, but core competencies. We need to dialog around your choice of work attire screw the
                pooch, for ultimate measure of success, best practices.`
    },
    {
        "avatar": "images/person-circle.svg",
        "text": `Big picture hit the ground running. If you're not hurting you're not winning. Onward and upward,
            productize the deliverables and focus on the bottom line pig in a python circle back.`
    },
    {
        "avatar": "images/person-circle.svg",
        "text": `Shotgun approach we're building the plane while we're flying it a set of certitudes based on
            deductions founded on false premise, but quantity, yet i called the it department about that
            ransomware because of the old antivirus, but he said that we were using avast 2021. Locked and
            loaded. We need to follow protocol workflow ecosystem.`
    }
];

const MESSAGES_STORAGE_KEY="messages";

let storage = localStorage;

function addMessage(message) {
    return fetch("/api/v1/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message)
    });
}

async function getMessages() {
    return fetch("/api/v1/messages").then(
        (response) => {
            if (!response.ok) {
                throw new Error("Error getting messages");
            }
            return response.json();
        }).catch((error) => {
            // Better way would be to throw error here and let the client handle (e.g. show error message)
            // Returning empty array for simplicity only!
            console.log("Error getting messages");
            return [];
        });
}

function clearMessages() {
    return storage.removeItem(MESSAGES_STORAGE_KEY);
}

export {addMessage, getMessages, clearMessages};