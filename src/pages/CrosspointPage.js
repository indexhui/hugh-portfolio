import IntroSection from 'components/layouts/IntroSection';
import OverviewSection from 'components/layouts/OverviewSection';

import Background from 'components/crosspoint/Background';
import RedesignIntro from 'components/crosspoint/RedesignIntro';
import Problem from 'components/crosspoint/Problem';
import Solution from 'components/crosspoint/Solution';
import Outcome from 'components/crosspoint/Outcome';
import Iterations from 'components/crosspoint/Iterations';
import Takeaway from 'components/crosspoint/Takeaway';

import banner01 from 'assets/images/crosspoint/banner01.png';

const title = { en: 'cpTitle_1', zh: 'cpTitle_2' };
const subTitle = 'cpSubtitle';

const bannerList = [banner01, banner01];

const introduction = [
  {
    title: 'durationEmployment',
    content: 'cpDuration',
  },
  {
    title: 'myRole',
    content: 'pd',
  },
  {
    title: 'team',
    content: 'PO x1, Developer x3 ,Designer x1',
  },
  {
    title: 'workScope',
    content: 'cpWorkScope',
  },
];

const overviewContent = {
  overview: ['cpOverview_1', 'cpOverview_2'],
  projectOutcomes: ['cpOutcome_1', 'cpOutcome_2', 'cpOutcome_3', 'cpOutcome_4'],
};

export function CrosspointPage() {
  return (
    <>
      <IntroSection
        title={title}
        subTitle={subTitle}
        bannerList={bannerList}
        introduction={introduction}
      />
      <OverviewSection
        content={overviewContent.overview}
        projectOutcomes={overviewContent.projectOutcomes}
      />
      <Background />
      <RedesignIntro />
      <Problem />
      <Solution />
      <Outcome />
      <Iterations />
      <Takeaway />
    </>
  );
}
