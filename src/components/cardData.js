import IbdImg from "/img1.jpg";
import colonCancerImg from "/img2.jpg";
import constipationImg from "/img3.jpg";
import rectalCancerImg from "/img4.jpg";

const cards = [
    // Haemmoroids
    {
        id: 1,
        image: "https://img.freepik.com/premium-photo/man-with-diarrhea-problem-man-with-toilet-paper-hand-touching-his-buttock-man-with-hemorrhoid-problem-isolated-background_550253-1214.jpg?w=740",
        //"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Piles/Hemorrhoids",
        description:
            "Hemorrhoids are a normal part of the anal canal described as a 'Vascular Cushion'. Any pathology (bleeding/swollen) of the vascular cushion is known as hemorrhoids. Hemorrhoids develop inside the rectum, called internal hemorrhoids. These develop under the skin around the anus, called external hemorrhoids.",
        content: [
            {
                title: "Predisposing Factors / Causes",
                items: [
                    "Abnormal anal pressure profile and anal compliance",
                    " Constipation",
                    " Diarrhoea",
                    "Dietary pattern",
                    " Heredity",
                    "Erect posture",
                    "  Raised intra-abdominal pressure",
                    "Absence of values in the hemorrhoidal plexus and draining vein ",
                ],
            },
            {
                title: "Classification",
                items: ["1. Internal Hemorrhoids", "2. External Hemorrhoids"],
            },

            {
                title: "Grading of Internal Hemorrhoids",
                items: [
                    "Grade 1: Those that bulge into the lumen of anal canal may produce painless bleeding.",
                    "Grade 2:  Those that protrude at the time of bowel movement but reduce spontaneously.",
                    "Grade 3:  Those that protrude spontaneously or at the time of bowel movement and require manual replacement",
                    "Grade 4:  Those that protrude permanently and cannot be reduced.",
                ],
            },
            {
                title: "Clinical Presentation",
                items: [
                    " Rectal bleeding, painless, bright red",
                    "Anal itching",
                    "Rectal prolapse/ protrusion",
                    "Pain",
                ],
            },
            {
                title: "Treatment",
                items: [],
            },
            {
                title: "According to grade of hemorrhoid:",
                items: [
                    {
                        sub_title: "1. Medical Management",
                        sub_items: [
                            "Dietary management",
                            "Stool softener",
                            "Sitz bath",
                            "Topical therapies",
                            "Oral therapies",
                        ],
                    },
                    {
                        sub_title: "1. Medical Management",
                        sub_items: [
                            "Rubber band ligation",
                            "Sclerotherapy",
                            "Infrared Coagulation",
                        ],
                    },
                    {
                        sub_title: "3. Operative Management",
                        sub_items: [
                            "Excisional hemorrhoidectomy",
                            "Stapled hemorrhoidopexy",
                            "Transanal hemorrhoidal dearterialization",
                        ],
                    },
                ],
            },
        ],
    },

    //Anal Fissure ***
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Anal Fissure",
        description:
            "A fissure in one is a painful linear ulcer situated in anal canal extending from just below the Dentate line to the margin of anus. ",
        content: [
            {
                title: "Clinical Fissure",
                items: [
                    "Bright red bleeding with bowel movements.",
                    "Sharp, burning, tearing and pain after bowel movement.",
                    "Itching around the anus",
                ],
            },
            {
                title: "Cause",
                items: [
                    "Stretching due to hard and constipated stool and strain.",
                    "Diarrhoea",
                    "Pregnancy",
                    "IBD",
                ],
            },
            {
                title: "Risk Factor",
                items: [
                    "Constipation",
                    "Pregnancy",
                    "Decrease in water intake",
                    "Decrease in intake of dietary fibre",
                    "Decrease in anal hygiene",
                    "Long standing intake of fast food",
                ],
            },
            {
                title: "Treatment",
                items: [
                    {
                        sub_title: "Conservative",
                        sub_items: [
                            "Prevention of constipation",
                            "Prevention of pain",
                            "Topical agents",
                            "Try : Botulinum Toxin",
                        ],
                    },
                    {
                        sub_title: "Surgical Treatment",
                        sub_items: [
                            "Lateral internal sphincterotomy",
                            "Fissurectomy",
                            "Anal advancement flap",
                        ],
                    },
                ],
            },
        ],
    },

    //IBD
    {
        id: 3, //CONTENT LEFT TO EDIT
        image: IbdImg,
        title: "IBD",
        description:
            "An inflammatory disease that affects the rectum and colon, ulcerative colitis is usually treated medically. This condition can come and go, but if medical management isn’t sufficient, you may need surgery.",
        content: [
            {
                title: "",
                items: [],
            },
        ],
    },

    //Colon Cancer ***
    {
        id: 4,
        image: colonCancerImg,
        title: "Colon Cancer",
        description:
            "Colorectal cancer ranks as the third most common cancer globally, following lung, prostate, and breast cancers. It also stands as the third leading cause of cancer-related deaths. The lifetime risk of developing colorectal cancer is approximately 5%. Notably, up to 90% of cases occur in individuals over the age of 50. These statistics underscore the significance of awareness, early detection, and preventive measures in addressing colorectal cancer",
        content: [
            {
                title: "Aetiolog",
                items: [
                    {
                        sub_title: "Sequence of genetic mutations",
                        sub_items: ["APC", "K-ras", "PS3"],
                    },
                    {
                        sub_title: "Diet",
                        sub_items: [
                            "Red Meat",
                            "Processed meat products",
                            "Dietary animal fat",
                            "Smoking",
                            "Alcohol",
                        ],
                    },
                    {
                        sub_title: "Cholecystectomy",
                        sub_items: [],
                    },
                    {
                        sub_title: "Inflammatory bowel disease",
                        sub_items: [],
                    },
                ],
            },

            {
                title: "Clinical Presentation",
                items: [
                    {
                        sub_title: "Asymptomatic",
                        sub_items: [
                            "30% of all cancer diagnosed by colonoscopy in absence of symptoms",
                        ],
                    },
                    {
                        sub_title: "When symptoms occurs, present",
                        sub_items: [
                            "Pain in abdomen",
                            "G1 Bleeding",
                            "Iron deficiency anaemia",
                            "Change in bowel habit",
                            "Vague non-specific symptom such as Lethargy, weight loss, loss of appetite",
                        ],
                    },

                    {
                        sub_title: "Emergency Presentation",
                        sub_items: ["Perforation", "Obstruction"],
                    },
                    {
                        sub_title: "Late",
                        sub_items: [
                            "Palpable abdominal moss",
                            "Severe weight loss",
                            "Intestinal Obstruction",
                            "Rarely, perforation can lead to peritonitis or fistulization to an adjacent organ",
                        ],
                    },
                ],
            },

            {
                title: "Risk Factor",
                items: [
                    {
                        sub_title: "Modifiable risk factor",
                        sub_items: [
                            "Diet : low fiber and high fat diet",
                            "Obesity",
                            "Smoking and heavy alcohol",
                        ],
                    },
                    {
                        sub_title: "Non-modificabile",
                        sub_items: [
                            "Age: increasing age",
                            "Personal history of colorectal cancer, polyp, IBD",
                            "Discrete inherited syndrome(Fap,Lynch syndrome)",
                        ],
                    },
                ],
            },
        ],
    },

    //Constipation
    {
        id: 5,
        image: constipationImg,
        title: "Constipation",
        description:
            "Primarily described as an inflammatory disorder, Crohn’s disease can decrease your body’s ability to digest food, absorb nutrients, and remove waste.   also Defined as infrequent bowel movements",
        content: [
            {
                title: "symptoms such as",
                items: [
                    "Excessive straining",
                    "Sense of incomplete evacuation",
                    "Use of manual manoeuvres",
                ],
            },

            {
                title: "Rome III Criteria for Functional Constipation",
                items: [],
            },
            {
                title: "Must include two or more of the following ",
                items: [
                    "Straining during at least 25% of defecation ",
                    "Lumpy or hard stools in at least 25% of defecationt",
                    "Sensation of incomplete evacuation for at least 25% of defecation",
                    "Sensation of anorectal obstruction / blockage",
                    "Manual manoeuvres to facilitates at least 25% of defecation",
                    "Fewer than 3 defecation per week.",
                ],
            },
            {
                title: "There is insufficient criteria for IBS.",
                items: [],
            },
            {
                title: "   Loose stools are rarely present without the use of laxatives.",
                items: [],
            },
            {
                title: "Risk Factor",
                items: [
                    {
                        sub_title: "1. Lifestyle",
                        sub_items: [
                            "Inadequate fluid intake",
                            "Inadequate fibre intake",
                            "Inactivity",
                            "Laxative abuse",
                        ],
                    },
                    {
                        sub_title: "2. Medication",
                        sub_items: ["Opiates", "Iron"],
                    },
                    {
                        sub_title: "3. Medical Illness",
                        sub_items: [
                            "Endocrine / metabolic dysfunction",

                            "Neurological disorder",
                            "Psychological disorder",
                        ],
                    },
                    {
                        sub_title: "4. Colonic function",
                        sub_items: [],
                    },
                    {
                        sub_title: "5. Pelvic floor abnormality",
                        sub_items: [],
                    },
                ],
            },
            {
                title: "Treatment",
                items: [
                    {
                        sub_title: "1.Behavioural medication",
                        sub_items: [
                            "Exercise",
                            "Fluid Intake / Hydration",
                            "Dietary Fibre",
                        ],
                    },
                    {
                        sub_title: "2. Medical Therapies",
                        sub_items: [
                            "Bulking laxatives (eg: psyllium / isopgol)",
                            "Osmotic laxatives",
                            "Colonic irritants / stimulant laxatives",
                            "Softening laxative",
                            "Prosecutary agent",
                            "Enemos and suppositories",
                        ],
                    },
                    {
                        sub_title: "3. Surgical Management",
                        sub_items: [],
                    },
                ],
            },
        ],
    },

    //Rectal Cancer
    {
        id: 6, //LEFT TO EDIT
        image: rectalCancerImg,
        title: "Rectal Cancer",
        description:
            "Primarily described as an inflammatory disorder, Crohn’s disease can decrease your body’s ability to digest food, absorb nutrients, and remove waste.",
        content: [
            {
                title: "",
                items: [],
            },
        ],
    },

    //Fistula ***
    {
        id: 7,
        image: IbdImg,
        title: "Fistula is ANO  ",
        description:
            "A fistula in ano is an abnormal hollow tract or cavity, i.e., lined with granulation tissue, that connects a primary opening inside the anal canal to a secondary opening in the perineal scheme",
        content: [
            {
                title: "Etiology/Cause",
                items: [
                    "Cryptoglandular 90%",
                    "Post operative or traumatic 3%",
                    "Inflammatory bowel disease 3%",
                    "Anal fissure 3%",
                    "Tuberculosis 1%",
                ],
            },

            {
                title: "Clinical feature",
                items: [
                    "Visually persisted by history of an anorectal abscess that was drained",
                    "Bleeding",
                    "Irritation from chronic moisture / fluid / faecal discharge",
                    "Pain from infection",
                ],
            },

            {
                title: "Goal of treatment ",
                items: [
                    "Elimination of sepsis ",
                    "Closure of fistula tract",
                    "Preservation of patients faecal continence and sphincter function",
                    "Minimising recurrence",
                ],
            },

            {
                title: "Treatment",
                items: [
                    {
                        sub_title: "Operative",
                        sub_items: [
                            "Fistulotomy",
                            "Fistulectomy",
                            "Secton",
                            "Endorectal advancement flap",
                            "LIFT(Ligation of intersphincteric fistula)",
                            "Filac",
                        ],
                    },
                    {
                        sub_title: "Non-Operative",
                        sub_items: ["Fibrin Glue", "Anal fistula plug"],
                    },
                    {
                        sub_title: "New technologies for treatment",
                        sub_items: [
                            "Video assisted anal treatment",
                            "Fistula laser closure",
                            "Stem Cell therapy",
                        ],
                    },
                ],
            },
        ],
    },

    //Pilonidal Sinus
    {
        id: 8, //LEFT TO EDIT
        image: colonCancerImg,
        title: "Pilonidal Sinus",
        description:
            "Primarily described as an inflammatory disorder, Crohn’s disease can decrease your body’s ability to digest food, absorb nutrients, and remove waste.",
        content: [
            {
                title: "",
                items: [],
            },
        ],
    },

    //Rectal Prolapse ***
    {
        id: 9,
        image: colonCancerImg,
        title: "Rectal Prolapse",
        description:
            "Extrusion of the full thickness of the circular fold of the rectum through the anal muscles beyond the anal verge.",
        content: [
            {
                title: "Etiology",
                items: [
                    {
                        sub_title: "Constipation or a component of straining",
                        sub_items: [],
                    },
                    {
                        sub_title: "Diarrhoea",
                        sub_items: [],
                    },
                    {
                        sub_title: "Specific anatomic characteristics",
                        sub_items: [
                            "Diastasis of the levator ani",
                            "Abnormally deep ………",
                            "Redundant Sigmoid Colon",
                            "Patulous Anal Sphincter",
                            "Loss of sacral attachments",
                        ],
                    },
                    {
                        sub_title: "Multiparity",
                        sub_items: [],
                    },
                    {
                        sub_title: "..............",
                        sub_items: ["Obstetric", "Diabetic", "Neoplastic"],
                    },
                ],
            },
            {
                title: "Symptoms",
                items: [
                    "Feeling of bulge during defecation",
                    "Mucus discharge and fecal accident ",
                    "Fecal incontinence",
                    "Constipation",
                    "Increase frequency or sensation of defecation ",
                    "Pelvic pressure and pain ",
                    "Rectal bleeding",
                ],
            },
            {
                title: "Surgical approach",
                items: [
                    {
                        sub_title: "Perineal",
                        sub_items: [
                            "Anal enrichment /Thiersch procedure",
                            "Delorme",
                            "Alternator Procedure / Peripheral Rectosigmoidectomy",
                        ],
                    },
                ],
            },
            {
                title: "Abdominal approach",
                items: [
                    {
                        sub_title: "Open / laparoscopic",
                        sub_items: [
                            "Mesh Rectopexy",
                            "Resection Rectopexy",
                            "Trans-Abdominal Rectopexy",
                        ],
                    },
                ],
            },
        ],
    },

    //Polyp
    {
        id: 10, //LEFT TO EDIT
        image: colonCancerImg,
        title: "Polyp",
        description:
            "Primarily described as an inflammatory disorder, Crohn’s disease can decrease your body’s ability to digest food, absorb nutrients, and remove waste.",
        content: [
            {
                title: "",
                items: [],
            },
        ],
    },
];

export default cards;
