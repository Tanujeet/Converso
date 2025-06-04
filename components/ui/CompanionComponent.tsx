"use client";

import { cn, getSubjectColor } from "@/lib/utils";
import { vapi } from "@/lib/vapi.sdk";
import { error } from "console";
import { useEffect, useState } from "react";
import Image from "next/image";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTIONG",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

const CompanionComponent = ({
  name,
  subject,
  topic,
  userImage,
  userName,
}: CompanionComponentProps) => {
  const [callStatus, setcallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [isSpeaking, setisSpeaking] = useState(false);

  useEffect(() => {
    const onCallStart = () => setcallStatus(CallStatus.ACTIVE);
    const onCallEnd = () => setcallStatus(CallStatus.FINISHED);
    const onMessage = () => {};
    const onSpeechStart = () => setisSpeaking(true);
    const onSpeechEnd = () => setisSpeaking(false);
    const onError = (error: Error) => console.log(error);

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
    vapi.on("error", onError);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);

    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
      vapi.off("error", onError);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
    };
  }, []);

  return (
    <section className="flex flex-col h-[70vh]">
      <section className="flex gap-8 max-sm:flex-col">
        <div className="companion-section">
          <div
            className="companion-avatar"
            style={{ backgroundColor: getSubjectColor(subject) }}
          >
            <div
              className={cn(
                "absolute transition-opacity duration-1000",
                callStatus === CallStatus.FINISHED ||
                  callStatus === CallStatus.INACTIVE
                  ? "opacity-1001"
                  : "opacity-0",
                callStatus === CallStatus.CONNECTING &&
                  "opacity-100 animate-pulse"
              )}
            >
              <Image
                src={`/icons/${subject}.svg`}
                alt={subject}
                width={150}
                height={150}
                className="max-sm:w-fit"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CompanionComponent;
