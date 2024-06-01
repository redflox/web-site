import { useRef, useState } from "react";
import useFocusOnKeyPress from "./utils/useFocusOnKeyPress";

export default function Terminal() {
    const [commands, setCommands] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);

    useFocusOnKeyPress(inputRef);

    const commandsList: { [key: string]: string } = {
        root: "I am a Full Stack Developer.",
        social: "GitHub: @redflox | LinkedIn: @bfmunozm96",
        projects: "1. Portfolio Website - https://root.dev | 2. Retos - Retos Frontend - https://retos.redflox.com",
        about: "I am a Full Stack Developer based in Soacha, Colombia. I love building things for the web.",
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const command = input.trim();
            setHistory([...history, command]);
            if (commandsList[command]) {
                setCommands([...commands, command, commandsList[command]]);
            } else {
                setCommands([...commands, command, "Command not found"]);
            }
            setInput("");
            setHistoryIndex(history.length + 1);
        } else if (e.key === "ArrowUp") {
            if (historyIndex > 0) {
                setHistoryIndex(historyIndex - 1);
                setInput(history[historyIndex - 1] || "");
            }
        } else if (e.key === "ArrowDown") {
            if (historyIndex < history.length) {
                setHistoryIndex(historyIndex + 1);
                setInput(history[historyIndex + 1] || "");
            }
        }
    };


    return (
        <div className="terminal">
            <div className="terminal__header">
                <div className="terminal__header__button"></div>
                <div className="terminal__header__button"></div>
                <div className="terminal__header__button"></div>
            </div>
            <div className="terminal__body">
                <div className="terminal__body__content">
                    {commands.map((command: string, index: number) => (
                        <div key={index} className="terminal__body__content__command">
                            <span className="terminal__body__content__command__prompt">
                                <span className="terminal__body__content__command__prompt__user">root</span>
                                <span className="terminal__body__content__command__prompt__path">~</span>
                            </span>
                            <span className="terminal__body__content__command__text">{command}</span>
                        </div>
                    ))}
                    <div className="terminal__body__content__command">
                        <span className="terminal__body__content__command__prompt">
                            <span className="terminal__body__content__command__prompt__user">root</span>
                            <span className="terminal__body__content__command__prompt__path">~</span>
                        </span>
                        <input
                            className="terminal__body__content__command__input"
                            value={input}
                            onChange={handleInput}
                            onKeyDown={handleKeyDown}
                            ref={inputRef}
                            autoFocus
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
