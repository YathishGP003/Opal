import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import React from "react";
import Loader from "../loader";
import VideoRecorderDuotone from "@/components/icons/video-recorder-duotone";
import { FileDuoToneBlack } from "@/components/icons";
import {
  Bot,
  DownloadIcon,
  FileTextIcon,
  Pencil,
  StarsIcon,
  VideoIcon,
} from "lucide-react";

type Props = {
  plan: "PRO" | "FREE";
  trial: boolean;
  videoId: string;
};

const AiTools = ({ plan, trial, videoId }: Props) => {
  //Are they on a free plan?
  //have they already tried the AI feature?
  //if not? Try button

  // useMutationData
  //serveraction titles and description

  //WIP: setup the ai hook
  return (
    <TabsContent value="Ai tools">
      <div className="p-5 bg-[#1D1D1D]  rounded-xl flex flex-col gap-y-6 ">
        <div className="flex items-center gap-4">
          <div className="w-full">
            <h2 className="text-3xl font-bold"> Ai Tools</h2>
            <p className="text-[#BDBDBD] ">
              Taking your video to the next step with the power of AI!
            </p>
          </div>

          <div className="flex gap-4 w-full justify-end">
            <Button className=" mt-2 text-sm">
              <Loader state={false} color="#000">
                Try now
              </Loader>
            </Button>
            {/* WIP: Pay button  */}
            <Button className="mt-2 text-sm" variant={"secondary"}>
              <Loader state={false} color="#000">
                Pay Now
              </Loader>
            </Button>
            {/* <Button className=" mt-2 text-sm">
            <Loader
              state={false}
              color="#000"
            >
              Generate Now
            </Loader>
          </Button> */}
          </div>
        </div>
        <div className=" border-[1px] rounded-xl p-4 gap-4 flex flex-col bg-[#1b0f1b7f] ">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-[#a22fe0]"> Opal Ai</h2>
            <StarsIcon color="#a22fe0" fill="#a22fe0" />
          </div>
          <div className="flex gap-2 items-start">
            <div className="p-2 rounded-full border-[#2d2d2d] border-[2px] bg-[#2b2b2b] ">
              <Pencil color="#a22fe0" />
            </div>
            <div className="flex flex-col">
              <h3 className="textmdg">Summary</h3>
              <p className="text-muted-foreground text-sm">
                Generate a description for your video using AI.
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <div className="p-2 rounded-full border-[#2d2d2d] border-[2px] bg-[#2b2b2b] ">
              <FileTextIcon color="#a22fe0" />
            </div>
            <div className="flex flex-col">
              <h3 className="textmdg">Summary</h3>
              <p className="text-muted-foreground text-sm">
                Generate a description for your video using AI.
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <div className="p-2 rounded-full border-[#2d2d2d] border-[2px] bg-[#2b2b2b] ">
              <Bot color="#a22fe0" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-md">AI Agent</h3>
              <p className="text-muted-foreground text-sm">
                Viewers can ask questions on your video and our ai agent will
                respond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default AiTools;
