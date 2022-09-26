import IntroSection from 'components/layouts/IntroSection';
import OverviewSection from 'components/layouts/OverviewSection';
import ProblemDiscovery from 'components/portaly/ProblemDiscovery';
import DefineRequirement from 'components/portaly/DefineRequirement';
import Solution from 'components/portaly/Solution';

// import banner0 from 'assets/images/portaly/banner01.png';
import banner01 from 'assets/images/portaly/banner01.jpg';
import banner02 from 'assets/images/portaly/banner02.jpg';
import banner03 from 'assets/images/portaly/banner03.jpg';

const title = { en: 'Portaly', zh: '傳送門' };
const bannerList = [banner01, banner02, banner03];
const introduction = [
  {
    title: '專案時辰 / 時間',
    content: '4個月 / November 2020 - April 2021',
  },
  {
    title: '我得角色',
    content: '產品設計師',
  },
  {
    title: '團隊組成',
    content: 'PO x1, Developer x1 ,Designer x1',
  },
  {
    title: '工作範疇',
    content: 'MVP、架構規劃、功能流程規劃、設計完稿、工程交付',
  },
];

const overview = [
  '我們期望能提供創作者們，一個較低成本、好上手的個人頁面建立工具，放大圖文的吸引力、藉此增加點擊與互動的機會，讓受眾得以透過「傳送門 Portaly」觸及他們喜愛的創作者，擴散創作的影響力。',
  '目前產品於 2022年7月中正式上線， 已累積3000位創作者創作出自己的傳送門，總瀏覽量來到 500K 。也獲得多名知識型 KOL 自主性分享推薦: 郭政佑 Kevin「好看的不像實力派，是我對傳送門的印象」',
];

export function PortalyPage() {
  return (
    <>
      <IntroSection
        title={title}
        bannerList={bannerList}
        introduction={introduction}
      />
      <OverviewSection content={overview} />
      <ProblemDiscovery />
      <DefineRequirement />
      <Solution />
    </>
  );
}
