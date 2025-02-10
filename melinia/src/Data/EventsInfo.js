import images from "../Assets/EventImages/Imageloader";
const events = [
    {
        id: 1,
        title: "HACKATHON",
        time: "10:00 AM",
        venue: "MBCH",
        description: "Melinia Hackathon 2025 is a premier innovation-driven competition designed to foster creativity, problem-solving skills, and collaboration among participants. This flagship event challenges students to develop groundbreaking solutions to real-world problems across diverse domains, pushing the boundaries of technology and innovation.Participants will have the opportunity to showcase their technical expertise, work in dynamic teams, and compete in a high-stakes environment where creativity meets practical application. Join us for an exciting journey of learning, networking, and problem-solving as we redefine the future through technology!",
        rules: [
            "Bring Laptop, Charger",
            "Team Size: 4 Members",
            "Round 1: Shortlisting will be based on the submitted PPT.",
            "Round 2: Teams will be evaluated based on their project statistics and progress.",
            "Round 3: Shortlisting will be based on further project progress. Mentors will provide guidance and feedback to help teams advance to the finals.",
            "Final Round: The final evaluation will be conducted by department staff or super seniors, assessing the final project and presentation."
        ],
        image: images.hackathon,
        prizes: {
            first: "₹6,500",
            second: "₹4,000"
        },
        contact: ["Sai Nikhil S - 9080861273"],
        category: ["Flagship"],
        is_flagship: true
    },
    {
        id: 2,
        title: "THE PITCH PIT",
        time: "9:00 AM",
        venue: "IT 212, IT 213",
        description: "Round 1: Idea Submission\n Teams must submit an abstract of 500 to 1,000 words, based on which a selection panel will shortlist the teams for Round 2.\n• Email your submission to meliniathepitchpit@gmail.com\n• A panel will screen and shortlist the best business ideas for Round 2.\n\nRound 2: Business Plan Presentation (Online)\n• Shortlisted teams will present their detailed business plan to the panel.\n• Presentation Time Maximum 10 minutes per team.\n• The panel will evaluate and select the best business plan.\n\nRound 3: Final Pitch\n• The final round will be conducted in person at Coimbatore Institute of Technology on Melinia’25 - 7th March 2025.\n• Shortlisted teams will present their refined business ideas to the jury.\n• Winners of Final Round will receive cash prizes.",
        rules: [
            "Registration Amount: ₹300",
            "Team Size: 1-4",
            "Registration Deadline: 16/02/2025",
            "Bring Laptop and power adapter",
            "Plagiarism leads to direct disqualification"
        ],
        image: images.pitchpit,
        prizes: {
            first: "₹6500",
            second: "₹4000"
        },
        contact: ["Karthik Krishna - +91 9092723034", "Shanmugapriyaa D - +91 8248594018"],
        category: ["Flagship"],
        is_flagship: true
    },
    {
        id: 3,
        title: "RED LIGHT GREEN CODE",
        time: "10:30 AM",
        venue: "CM 202",
        description: "Red Light Green Code - Stop. Think. Code. Navigate through mind-bending flowchart challenges, ThinkWizard to unlock questions, crack puzzles to unlock test cases, and track down elusive bugs. Each level is packed with thrilling twists that test your logic,speed and teamwork. With excitement at every turn, only the sharpest minds will reach the finish line. Are you ready to code your way to victory?",
        rules: [
            "2 or 4 per team - choose your team wisely",
            "Bring your laptops",
            "Plagiarism is strictly prohibited",
            "Come prepared with your own internet access"
        ],
        image: images.redlightgreencode,
        prizes: {
            first: "₹3500",
            second: "₹2000"
        },
        contact: ["S. Suhaina - 9790941992"],
        category: ["Technical"],
        is_flagship: false
    },
    {
        id: 4,
        title: "RACE TO CODE",
        time: "10:00 AM",
        venue: "103",
        description: "Brace yourself for an electrifying three-round challenge where only the sharpest minds will prevail! Speed through a thrilling RC car race while tackling brain-teasing technical puzzles. Dominate a rapid-fire MCQ quiz, testing your coding prowess and logical reasoning. Then, face the ultimate test in a high-stakes mystery coding challenge, where an unexpected twist awaits. Think fast, code smart, and rise to victory!",
        rules: [
            "Bring your own laptop - essential for the later rounds.",
            "Team size: 2 members - teamwork makes the dream work!",
            "Strictly no plagiarism - any violation leads to instant disqualification.",
            "Follow time limits - delays will result in penalties.",
            "Brace yourself - the biggest twist is the one you'll never see coming!"
        ],
        image: images.racetocode,
        prizes: {
            first: "₹3,500",
            second: "₹2,000"
        },
        contact: ["Tarun S R - 8870881201"],
        category: ["Technical"],
        is_flagship: false
    },
    {
        "id": 5,
        "title": "PLAYER 456's REVENGE",
        "time": "10:30 AM",
        "venue": "MS103",
        "description": "In this event, teams are thrust into a series of high-stakes challenges where precision, teamwork, and creativity are their only weapons for survival. Participants must work together to complete tasks such as complete tasks with their legs tied, cracking cryptic codes, playing Reverse Pictionary, and balancing a platform with cups. Every mistake could result in elimination, with the pressure mounting like a game of life or death. Success in each round brings teams closer to the ultimate prize, but only those who can balance speed, strategy, and flawless execution will make it to the end.",
        "rules": [
            "Team size: 2",
            "Any sabotage or cheating will be disqualified immediately"
        ],
        "image": images.player456,
        "prizes": {
            "first": "₹2500",
            "second": "₹1500"
        },
        "contact": ["Sashwathan S - 7904733589"],
        "category": ["Non-Technical"],
        "is_flagship": false
    },
    {
        id: 6,
        title: "THE PROFESSOR'S LAST LECTURE",
        time: "11:00 AM",
        venue: "MS 106",
        description: "A brilliant and controversial professor is found dead just before revealing groundbreaking research. Was it a rival, a student, or something more sinister? Join this high-stakes mystery challenge, where teams investigate crime scenes, decode secret messages, and uncover hidden motives. Each round brings new twists—only the sharpest minds will solve the case. Dare to dive into darkness? Unleash your inner sleuth and crack the case—before the killer strikes again!",
        rules: [
            "Team Size - 3 or 4",
            "Mobile phones are restricted",
            "Sharing the clues between teams is not allowed"
        ],
        image: images.professor,
        prizes: {
            first: "₹2500",
            second: "₹1500"
        },
        contact: [
            "Yashvitha - 9894060392",
            "Riza - 9894074180"
        ],
        category: ["Non-Technical"],
        is_flagship: false
    },
    {
        id: 7,
        title: "CIPHER QUEST: THE DATA MYSTERY",
        time: "10:30 AM",
        venue: "104",
        description: "This event is a competitive machine learning challenge designed to test teams' problem-solving, analytical, and model-building skills under unique constraints. Round 1: Participants receive only 50% of the dataset, while the remaining 50% is locked. The feature names are hidden behind riddles, and teams must solve them to unlock the rest of the data. Failure to identify a minimum number of features within the given time will result in elimination. Round 2: Qualified teams will proceed to build machine learning models while facing surprise challenges that impact coding time, testing their adaptability and efficiency. The winning team will be judged based on: 1. Model accuracy 2. Justification of choices 3. Bonus points for well-presented visualizations.",
        rules: [
            "Bring Laptop",
            "Teams must have 2-3 members.",
            "No internet usage is allowed.",
            "Some challenges involve solving riddles related to the dataset.",
            "Unexpected mysterious challenges will occur while building the model.",
            "Teams must submit their final model and present a brief justification.",
            "Bonus marks for visualizations."
        ],
        image: images.datamystery,
        prizes: {
            first: "₹3500",
            second: "₹2000"
        },
        contact: [
            "Priyadarshini - 9500862244",
            "Sri Bhavan - 9944206566"
        ],
        category: ["Technical"],
        is_flagship: false
    },
    {
        "id": 8,
        "title": "SURVIVE THE SWAP",
        "time": "10:30 AM",
        "venue": "MS 107",
        "description": "\"Survive the Swap\" is a high-stakes 1v1 strategy game that challenges players' intuition, deception, and decision-making skills. Players must carefully place their cards, analyse their opponent’s tactics, and make the right swaps to ensure their survival. With every round, the intensity rises, making it a thrilling knockout-style event where only the most strategic player advances to ultimate victory.",
        "rules": [
            "The game is played in a 1v1 format throughout all rounds.",
            "No external assistance is allowed.",
            "Players must not reveal their card placements to their opponents before the swap.",
            "Decisions made by event organizers are final."
        ],
        "image": images.survivetheswap,
        "prizes": {
            "first": "₹2500",
            "second": "₹1500"
        },
        "contact": ["Sudeep K - 7598323217"],
        "category": ["Non-Technical"],
        "is_flagship": false
    }
    ,
    {
        "id": 9,
        "title": "EXIT PLAN: THE CAMPUS EDITION",
        "time": "10:30 AM",
        "venue": "MS207",
        "description": "EXIT PLAN: THE CAMPUS EDITION\n\nRace against time in this ultimate campus escape challenge! Form your team, complete thrilling missions, solve puzzles, test your skills, and outmaneuver danger zones. Collect escape passes and strategize your way to victory. Do you have what it takes to make it out?\n\nThink fast. Move smart. Escape together!",
        "rules": [
            "Mission Zones (5 Total)",
            "Complete tasks to earn Escape Passes.",
            "Faster completion = More Passes.",
            "Teams with the lowest Passes after certain rounds get eliminated.",
            "Safe Zone (1 Total)",
            "Teams can rest & strategize.",
            "Provides temporary immunity from Hunters.",
            "Danger Zones (2 Total)",
            "Player Elimination will take place in these zones.",
            "Eliminated players can’t participate but can assist their team.",
            "Hidden special passes may grant immunity or advantages.",
            "Time Constraints & Disqualification",
            "Each mission has a set time limit.",
            "Teams with the lowest Passes after certain zones are eliminated.",
            "If a team fails to complete a mission in time, they will be eliminated.",
            "A team is fully disqualified if all members are eliminated in Danger Zones.",
            "Survive. Solve. Escape!"
        ],
        "image": images.exitplan,
        "prizes": {
            "first": "₹2,500",
            "second": "₹1,500"
        },
        "contact": [
            "Venkateshwaran S V - 6382129482",
            "Aishvarya S - 9488915001"
        ],
        "category": ["Non-Technical"],
        "is_flagship": false
    },
    {
        "id": 10,
        "title": "CODE DUEL",
        "time": "10:30 AM",
        "venue": "MS208",
        "description": "\"CODE DUEL\" is a thrilling 1 vs. 1 coding showdown that pits programmers against each other in a series of fast-paced, knockout-style battles. Designed to challenge participants' coding expertise, logical thinking, and adaptability, this competition delivers an electrifying experience for coders. Only the sharpest minds and fastest fingers will survive each round to claim ultimate glory. Each round introduces a mystery puzzle—the first team to solve it will receive unique perks that can either benefit themselves or put their opponent at a disadvantage in the head-to-head battle.",
        "rules": [
            "Teams must have 2-4 members (minimum one for coding challenge and one for puzzle challenge).",
            "No internet usage is allowed.",
            "Teams may use any offline coding platforms.",
            "Decisions made by event organizers are final.",
            "Bring your own laptops."
        ],
        "image": images.codingduel,
        "prizes": {
            "first": "₹3500",
            "second": "₹2000"
        },
        "contact": ["Logesh - 8248211569"],
        "category": ["Technical"],
        "is_flagship": false
    },
    {
        "id": 11,
        "title": "THE VAULT OF FORTUNE",
        "time": "11:30 AM",
        "venue": "MS 203",
        "description": "Hello Lucky Baskharrrrrr! Think you can sweet-talk an AI into handing over virtual cash? Well, this is your chance to outwit, outprompt, and outcash the competition! Teams will craft genius prompts to sneak past security firewalls, stack up digital dollars, and avoid getting wiped out. But beware—one bad prompt and your fortune disappears faster than your weekend plans!\n\nOnly the smoothest talkers, the fastest thinkers, and the boldest risk-takers will walk away with the ultimate prize. Ready to break the bank (legally, of course)? Let the AI heist begin!",
        "rules": [
            "Teams must consist of 2 to 3 members.",
            "The prompts given by the teams will be executed on the devices set up by the organizing team.",
            "No team may retry a prompt during the given chance.",
            "If a team exceeds the time limit three times in any round, they will be disqualified.",
            "Each prompt will be evaluated by both the AI model and the organizing team.",
            "Teams that use inappropriate words or context in their prompts will be immediately eliminated.",
            "The final decision regarding the winning team rests solely with the organizing team."
        ],
        "image": images.vaultoffortune,
        "prizes": {
            "first": "₹3500",
            "second": "₹2000"
        },
        "contact": [
            "Surya - 9344817790",
            "Priyadarshini - +91 63824 51789"
        ],
        "category": ["Technical"],
        "is_flagship": false
    },


    {
        "id": 12,
        "title": "KILL CODE: DEBUG TO SURVIVE",
        "time": "10:30 AM",
        "venue": "MS 108",
        "description": "In \"Kill Code: Debug to Survive,\" you are an elite investigator employed by the Front Man to solve a chilling murder mystery in the Squid Games HQ. As you navigate through layers of deceit and technical puzzles, only your sharpest instincts and logic will keep you alive. The game will test your analytical, problem-solving and programming skills like never before. Fail to uncover the truth, and the Front Man’s wrath will be your demise. Can you decode the mystery and survive, or will you become another victim of the deadly game?",
        "rules": [
            "Participants can use any programming language for coding challenges.",
            "Bring your own laptops.",
            "The questions must be solved in a linear manner, one after the other, in the order given by the event organizers.",
            "SQL queries must be structured correctly for database challenges.",
            "No external assistance or Chat bots is allowed.",
            "Time-limited challenges may apply in some sections.",
            "Decisions made by event organizers are final."
        ],
        "image": images.killcode,
        "prizes": {
            "first": "₹3,500",
            "second": "₹2,000"
        },
        "contact": [
            "Sudeep - 7598323217"
        ],
        "category": ["Technical"],
        "is_flagship": false
    }



];

export default events;
