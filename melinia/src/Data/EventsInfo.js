const events = [
    {
        id: 1,
        title: "Hackathon",
        category: ["Technical", "Flagship"],
        description: "Innovate, collaborate, and bring your ideas to life—this is where the future begins!",
        image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        venue: "Auditorium Hall A",
        time: "10:00 AM - 5:00 PM",
        rules: [
            "Teams of 2-4 members.",
            "No pre-built solutions allowed.",
            "Coding duration: 6 hours.",
            "Judging based on innovation, execution, and feasibility."
        ],
        prizes: {
            first: "₹50,000",
            second: "₹25,000"
        },
        contact: ["Lokhesh - 9876543210", "Rajesh - 9123456789"],
        is_flagship: true
    },
    {
        id: 2,
        title: "Paper Presentation",
        category: ["Technical", "Flagship"],
        description: "Innovation thrives where ideas converge; let this presentation be a spark for discovery and progress.",
        image: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        venue: "Seminar Hall B",
        time: "2:00 PM - 4:30 PM",
        rules: [
            "Solo or duo participation.",
            "Maximum presentation duration: 10 minutes.",
            "Q&A session: 5 minutes.",
            "Plagiarism above 20% will lead to disqualification."
        ],
        prizes: {
            first: "₹20,000",
            second: "₹10,000"
        },
        contact: ["Lokhesh - 9876543210", "Rajesh - 9123456789"],
        is_flagship: true
    },
    {
        id: 3,
        title: "Reverse Coding",
        category: ["Technical"],
        description: "Test your logical thinking and problem-solving skills in reverse coding.",
        image: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        venue: "Lab 101",
        time: "11:00 AM - 1:00 PM",
        rules: [
            "Individual event.",
            "Participants must write code based on given outputs.",
            "Time constraint: 2 hours.",
            "Usage of AI tools is not allowed."
        ],
        prizes: {
            first: "₹15,000",
            second: "₹7,500"
        },
        contact: ["Lokhesh - 9876543210", "Rajesh - 9123456789"],
        is_flagship: false
    },
    {
        id: 4,
        title: "PC Building",
        category: ["Technical"],
        description: "Showcase your expertise in assembling and configuring PCs for performance.",
        image: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        venue: "Lab 202",
        time: "3:00 PM - 5:30 PM",
        rules: [
            "Teams of 2 members allowed.",
            "Time limit: 90 minutes.",
            "Participants will be provided with hardware components.",
            "Judging based on speed and efficiency."
        ],
        prizes: {
            first: "₹12,000",
            second: "₹6,000"
        },
        contact: ["Lokhesh - 9876543210", "Rajesh - 9123456789"],
        is_flagship: false
    },
    {
        id: 5,
        title: "Treasure Hunt",
        category: ["Non-Technical"],
        description: "Solve clues and race against the clock in this exciting treasure hunt!",
        image: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        venue: "Main Campus Ground",
        time: "4:00 PM - 6:00 PM",
        rules: [
            "Teams of 3-5 members.",
            "Each team gets one clue at a time.",
            "No use of mobile phones.",
            "The team that finds the treasure first wins."
        ],
        prizes: {
            first: "₹10,000",
            second: "₹5,000"
        },
        contact: ["Lokhesh - 9876543210", "Rajesh - 9123456789"],
        is_flagship: false
    },
    {
        id: 6,
        title: "Kolangal",
        category: ["Non-Technical"],
        description: "A creative rangoli competition showcasing traditional art forms.",
        image: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        venue: "Open Air Theatre",
        time: "9:00 AM - 11:30 AM",
        rules: [
            "Solo or duo participation.",
            "Participants must bring their own colors.",
            "Time limit: 2 hours.",
            "Judging based on creativity and theme relevance."
        ],
        prizes: {
            first: "₹8,000",
            second: "₹4,000"
        },
        contact: ["Lokhesh - 9876543210", "Rajesh - 9123456789"],
        is_flagship: false
    }
];

export default events;
