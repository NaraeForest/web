import Link from "next/link";
import {
  readGoals,
} from "@/actions";
import {
  BaseBorder,
  BigProgressBar,
  DescriptionParagraph,
  Heading2,
  PageHeader,
  SmallProgressBar,
  SwiperGroup,
  SwiperSlide,
} from "@/components";
import {
  CreateGoalDialog,
} from "./_components";

export default async function Page() {
  const goals = await readGoals();
  return (
    <div
      className="safe-area-content"
    >
      <PageHeader
        title="Home"
      >
        <CreateGoalDialog />
      </PageHeader>
      <SwiperGroup>
        {goals.map((goal) => (
          <SwiperSlide
            key={goal.id}
          >
            <div
              className="px-5"
            >
              <Link
                className="block mb-5"
                href={`/goals/${goal.id}`}
              >
                <BaseBorder>
                  <p
                    className="text-2xl pb-4"
                  >
                    {goal.name}
                  </p>
                  <BigProgressBar progress={Math.floor(goal.complete / goal.totals * 100) || 0} />
                  <DescriptionParagraph>
                    {Math.floor(goal.complete / goal.totals * 100) || 0}% of goals completed
                  </DescriptionParagraph>
                </BaseBorder>
              </Link>
              <Heading2>
                Sub goals
              </Heading2>
              <div
                className="flex flex-col gap-4 pt-4"
              >
                {goal.subGoals.map((subGoal) => (
                  <Link
                    key={subGoal.id}
                    href={`/goals/${goal.id}/sub-goals/${subGoal.id}`}
                  >
                    <BaseBorder
                    >
                      <p
                        className="text-xs font-medium pb-4"
                      >
                        {subGoal.name}
                      </p>
                      <SmallProgressBar
                        progress={Math.floor(subGoal.complete / subGoal.totals * 100) || 0}
                      />
                      <DescriptionParagraph>
                        {Math.floor(subGoal.complete / subGoal.totals * 100) || 0}% of completed
                      </DescriptionParagraph>
                    </BaseBorder>
                  </Link>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperGroup>
    </div>
  );
}
