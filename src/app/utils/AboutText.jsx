const textContent = [
    {
        id: 1,
        text:
        "Fresh graduate with a strong focus on frontend development. Most of my work revolves around building clean, fast, and practical interfaces using Next.js and Tailwind."
    },
    {
        id: 2,
        text:
        "I also work with Laravel for backend APIs and have shipped several end-to-end projects for campus and small business needs. Nothing fancy—just reliable systems that solve real problems."
    },
    {
        id: 3,
        text:
        "My current goal is sharpening my engineering fundamentals: clean architecture, reusable components, predictable data flow, and writing code that’s easy to maintain, not just easy to ship."
    }
];


export default function AboutText(props) {
    return (
        <div {...props} className="max-w-7xl w-full bg-gray-800 p-8 rounded-2xl shadow-xl border border-blue-500/10">
            {textContent.map((item) => (
                <p 
                    key={item.id}
                    className={`text-lg md:text-xl leading-relaxed text-gray-300 mb-4`} 
                >
                    {item.text}
                </p>
            ))}
        </div>
    );
}