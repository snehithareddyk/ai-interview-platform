import Agent from "@/components/Agent";
import DisplayTechIcons from "@/components/DisplayTechIcons";
import { getCurrentuser } from "@/lib/actions/auth.action";
import { getInterviewById, getFeedbackByInterviewId } from "@/lib/actions/general.action";
import { getRandomInterviewCover } from "@/lib/utils";
import Image from "next/image";
import { redirect } from "next/navigation";

const InterviewDetails = async ({params}: RouteParams)=>{
    const { id } = await params;
    const user = await getCurrentuser();
    const interview = await getInterviewById(id);
    if(!interview) redirect('/');
    const feedback = await getFeedbackByInterviewId({
        interviewId: id,
        userId: user?.id!,
      });
    

    return(
        <>
        <div className="flex flex-row gap-4 justify-between">
            <div className="flex flex-row gap-4 items-center max-sm:flex-col">
            <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover size-[40px]"
            />
            <h3 className="capitalize">{interview.role} Interview</h3>
            </div>
            <DisplayTechIcons techStack={interview.techstack}/>
            </div>
            <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize">{interview.type}</p>
        </div>
        <Agent userName={user?.name || ''} userId={user?.id} interviewId={id} type="interview" questions={interview.questions}/>
        </>
    );
};
export default InterviewDetails;