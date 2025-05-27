import { Calendar, Clock, Mic, RectangleEllipsis, Timer } from "lucide-react";
import React from "react";

const VoiceToNotes: React.FC = () => {
    return (
        <div className="md:px-4 relative h-full">
            {/* Topbar */}
            <div className="border-b border-b-zinc-200 pb-3 ">
                {/* title input */}
                <input type="text" placeholder="Title" className="w-full border-none rounded mb-4 text-2xl font-bold text-black outline-none" />
                {/* Date time */}
                <div className="flex gap-4">
                    <p>
                        <span className="common-span"><Calendar size={15} /> May 17, 2025</span>
                    </p>
                    <p>
                        <span className="common-span"><Clock size={15} /> 12:44 AM</span>
                    </p>
                    <span className="common-span"> <Timer size={15} /> 20.8s</span>
                    <p>
                    </p>
                </div>

            </div>
            {/* transcribed texts */}
            <div className="mt-4">
                <textarea
                    className="w-full mt-4 outline-none"
                    contentEditable={false}
                    maxLength={10}
                    defaultValue={"Transcribed text will appear here..."}
                ></textarea>
            </div>

            {/* Toolbar */}
            <div className="absolute bottom-0 flex">
                <div className="flex items-center justify-between gap-4">
                    <span><Mic/></span>
                    <span><RectangleEllipsis/></span>
                </div>
                {/* Audio Seekbar */}
                <div>
                    
                </div>
            </div>
        </div>

    );
};

export default VoiceToNotes;
