import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import DesktopLogin from "./components/DesktopLogin";
import DesktopAbout from "./components/DesktopAbout";
import DesktopCommunity from "./components/DesktopCommunity";
import DesktopDiscoverPageActual from "./components/DesktopDiscoverPageActual";
import DesktopDCCDS from "./components/DesktopDCCDS";
import DesktopHome from "./components/DesktopHome";
import TabletHome from "./components/TabletHome";
import IPhone81 from "./components/IPhone81";
import TabletAbout from "./components/TabletAbout";
import TabletCommunity from "./components/TabletCommunity";
import TabletLogin from "./components/TabletLogin";
import TabletDiscoverPageActual from "./components/TabletDiscoverPageActual";
import TabletDCCDS from "./components/TabletDCCDS";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/desktop-login">
            <DesktopLogin
              navBarProps={desktopLoginData.navBarProps}
              loginInfoVariant2Props={desktopLoginData.loginInfoVariant2Props}
            />
          </Route>
          <Route path="/desktop-about">
            <DesktopAbout {...desktopAboutData} />
          </Route>
          <Route path="/desktop-community">
            <DesktopCommunity goHome="Go Home" />
          </Route>
          <Route path="/desktop-discover-page-actual">
            <DesktopDiscoverPageActual
              card1Props={desktopDiscoverPageActualData.card1Props}
              cardVariant41Props={desktopDiscoverPageActualData.cardVariant41Props}
              card31Props={desktopDiscoverPageActualData.card31Props}
              card2Props={desktopDiscoverPageActualData.card2Props}
              cardVariant42Props={desktopDiscoverPageActualData.cardVariant42Props}
              card32Props={desktopDiscoverPageActualData.card32Props}
            />
          </Route>
          <Route path="/desktop-dccds">
            <DesktopDCCDS
              dentonCityCountyDaySchool="Denton City County Day School"
              rectangle6="/img/rectangle-6-2@1x.png"
              loremIpsumDolorSi={
                <React.Fragment>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet libero nec nulla porttitor
                  suscipit. Morbi aliquam tempus erat, lacinia mattis eros porttitor a. Aliquam aliquam purus dolor,
                  vitae dictum nisi efficitur vitae. Duis in orci laoreet, dignissim ligula eu, ultricies nunc. Sed in
                  egestas magna, sit amet luctus augue. Nam et quam quis massa ornare vestibulum eget in metus. Sed nec
                  ligula magna.
                  <br />
                  <br />
                  Aenean sit amet nunc pellentesque, maximus libero dignissim, mattis quam. Donec massa metus, blandit
                  et tincidunt volutpat, sagittis sit amet dui. Phasellus et arcu lacus. Nunc rutrum neque eget purus
                  accumsan vehicula. In nec felis nec ligula dignissim posuere. Nunc ac sapien a nunc sodales ornare sed
                  eget lacus. Etiam feugiat ultrices dolor vestibulum tempus. Suspendisse a lectus ipsum. Suspendisse
                  ultrices interdum aliquet. Praesent rutrum arcu ut nisi cursus, sit amet ornare quam fermentum. Aenean
                  et fringilla justo.
                </React.Fragment>
              }
              whatWeOffer="What We Offer"
              navBar3Props={desktopDCCDSData.navBar3Props}
              detailsCardProps={desktopDCCDSData.detailsCardProps}
            />
          </Route>
          <Route path="/:path(|desktop-home)">
            <DesktopHome {...desktopHomeData} />
          </Route>
          <Route path="/tablet-home">
            <TabletHome {...tabletHomeData} />
          </Route>
          <Route path="/iphone-8-1">
            <IPhone81 {...iPhone81Data} />
          </Route>
          <Route path="/tablet-about">
            <TabletAbout {...tabletAboutData} />
          </Route>
          <Route path="/tablet-community">
            <TabletCommunity />
          </Route>
          <Route path="/tablet-login">
            <TabletLogin
              loginInfoVariant22Props={tabletLoginData.loginInfoVariant22Props}
              loginInfoVariant22Props2={tabletLoginData.loginInfoVariant22Props2}
            />
          </Route>
          <Route path="/tablet-discover-page-actual">
            <TabletDiscoverPageActual
              navBarProps={tabletDiscoverPageActualData.navBarProps}
              discoverButton4Props={tabletDiscoverPageActualData.discoverButton4Props}
              discoverButton5Props={tabletDiscoverPageActualData.discoverButton5Props}
              discoverButton6Props={tabletDiscoverPageActualData.discoverButton6Props}
              discoverButton7Props={tabletDiscoverPageActualData.discoverButton7Props}
              cards1Props={tabletDiscoverPageActualData.cards1Props}
              cards2Props={tabletDiscoverPageActualData.cards2Props}
            />
          </Route>
          <Route path="/tablet-dccds">
            <TabletDCCDS {...tabletDCCDSData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const navBarData = {
    about: "About",
    community: "Community",
    discover: "Discover",
    kidologo: "/img/kidologo-1@2x.png",
    kidoResources: "KIDO Resources",
};

const loginInfoVariant2Data = {
    medium_Ccexpress3: "/img/medium-ccexpress-3@2x.png",
    username: "Username",
    inputType1: "text",
    inputPlaceholder1: "Enter Username...",
    password: "Password",
    inputType2: "text",
    inputPlaceholder2: "Enter Password...",
    login: "Login",
};

const desktopLoginData = {
    navBarProps: navBarData,
    loginInfoVariant2Props: loginInfoVariant2Data,
};

const navBar2Data = {
    kidologo: "/img/kidologo-1@2x.png",
    kidoResources: "KIDO Resources",
};

const desktopAboutData = {
    whyThisMatters: "Why This Matters?",
    spanText: <React.Fragment><br />Ask yourself this: Have you ever thought about something and it seems impossible to get to?  Are you, a family member, or friend in need of help or assistance and are not sure where to go? Maybe you are going thourgh a tough time and need help getting out? <br /><br />The Team at KIDO Resources understands. This is why we exist to change the narrtive. We want to bring Companies and Partners to the community in a diffrent way. Establish a single place to find all the information you need. Have a friend or family memebr that needs help. Send them here! Know a company that deserves all the love from the community. Send them here! <br /><br />We are a platform for everything and can not wait to show this off to the world.</React.Fragment>,
    title: "Team",
    unsplash5Aguycw_Pjw1: "/img/unsplash-5aguycw-pjw@2x.png",
    christwideOscar: "Christwide Oscar",
    heyMyNameIsChri: "Hey, My name is Christwide. Most Call me Christ, I am the CEO and Founder of KIDO. Super fast backstory, I worked in a low income school here in Denton. Which my good friend Nate, introduced me too. I realised there was a huge problem. Lots of people didn’t know what stuff they had access to in their community. If they did, the process was super long and confusing. This is Where KIDO Resources steps in. We come to change that and make the process simpler and bring it to one place. So no more hiding, lets take charge and change the way we get information.",
    name: "Nathan Stewart",
    welcomeToKidoReso: "Welcome to KIDO Resources! I am one of the creators as well as the chief information officer. I have a degree in child development and have worked in a child care setting for 4 years. At the moment I am studying to become an occupational therapist. These areas of education have given me the opportunity to work with many amazing families. A fun note is that I enjoy nature and believe everyone deserves to have the time to enjoy the outdoors with their families.t",
    unsplash5Aguycw_Pjw2: "/img/unsplash-5aguycw-pjw-1@2x.png",
    navBar2Props: navBar2Data,
};

const chevronVariant21Data = {
    className: "",
};

const card1Data = {
    dentonCityCountyDaySchool: "Denton City County Day School",
    prototype: "Prototype",
    rectangle4: "/img/rectangle-4@2x.png",
    chevronVariant2Props: chevronVariant21Data,
};

const chevronVariant22Data = {
    className: "chevron-variant2-1",
};

const cardVariant41Data = {
    name: "Fred Moore Child Care Center",
    rectangle4: "/img/rectangle-4-1@2x.png",
    chevronVariant2Props: chevronVariant22Data,
};

const chevronVariant23Data = {
    className: "",
};

const card31Data = {
    dentonCityCountyDaySchool: "Health Services Of North Texas",
    rectangle4: "/img/rectangle-4-2@2x.png",
    chevronVariant2Props: chevronVariant23Data,
};

const chevronVariant24Data = {
    className: "chevron-variant2-2",
};

const card2Data = {
    dentonCityCountyDaySchool: "Nubby Pediatrics",
    prototype: "Coming Soon",
    rectangle4: "/img/rectangle-4-3@2x.png",
    className: "card-1",
    chevronVariant2Props: chevronVariant24Data,
};

const chevronVariant25Data = {
    className: "chevron-variant2-3",
};

const cardVariant42Data = {
    name: "Altitude Trampoline Park",
    rectangle4: "/img/rectangle-4-4@2x.png",
    className: "card-variant4",
    chevronVariant2Props: chevronVariant25Data,
};

const chevronVariant26Data = {
    className: "chevron-variant2-4",
};

const card32Data = {
    dentonCityCountyDaySchool: "Water Works Park",
    rectangle4: "/img/rectangle-4-5@2x.png",
    className: "card-variant4-2",
    chevronVariant2Props: chevronVariant26Data,
};

const desktopDiscoverPageActualData = {
    card1Props: card1Data,
    cardVariant41Props: cardVariant41Data,
    card31Props: card31Data,
    card2Props: card2Data,
    cardVariant42Props: cardVariant42Data,
    card32Props: card32Data,
};

const navBar32Data = {
    className: "nav-bar-3",
};

const detailsCard1Data = {
    rectangle7: "/img/rectangle-7-2@1x.png",
};

const desktopDCCDSData = {
    navBar3Props: navBar32Data,
    detailsCardProps: detailsCard1Data,
};

const navBar4Data = {
    about: "About",
    community: "Community",
    discover: "Discover",
    signUp: "Sign Up",
    login: "Login",
};

const newsLetter2Data = {
    className: "news-letter-1",
};

const desktopHomeData = {
    overlapGroup: "/img/unsplash-zywe8a1xpzi@1x.png",
    theFutureOfInformationIsHere: <React.Fragment>The Future of Information<br />is HERE</React.Fragment>,
    discoverResources: "Discover Resources",
    powerMovesCalendar: "/img/power-moves-calendar@2x.png",
    weeklyUpdates: "Weekly Updates",
    eachUpdateConsists1: "Each update consists of its own weekly theme and activites, so you are in constant exposre to the amazing stuff around you.",
    alluraTeamwork: "/img/allura-teamwork@2x.png",
    growthAndCare: "Growth And Care",
    eachUpdateConsists2: "Each update consists of its own weekly theme and activites, so you are in constant exposre to the amazing stuff around you.",
    croodsComments: "/img/croods-comments@2x.png",
    community: "Community",
    eachUpdateConsists3: "Each update consists of its own weekly theme and activites, so you are in constant exposre to the amazing stuff around you.",
    yourStoryYourWay: "Your Story, Your Way",
    ourWebsiteEnables: "Our Website, enables the abblity to accesss and discover companies and resources. Our product is free, fun and easy to use.",
    discoverNow: "Discover Now",
    happyBunchDesk: "/img/happy-bunch-desk@2x.png",
    kidoResources: "KIDO Resources",
    aboutUs: "About us",
    blog: "Blog",
    place: "Contact",
    kidoResourcesCopywrite2022: "Kido Resources Copywrite @ 2022",
    navBar4Props: navBar4Data,
    newsLetterProps: newsLetter2Data,
};

const newsLetter3Data = {
    className: "news-letter-2",
};

const tabletHomeData = {
    imageheader: "/img/unsplash-zywe8a1xpzi-1@1x.png",
    theFutureOfInformationIsHere: <React.Fragment>The Future of Information<br />is HERE</React.Fragment>,
    powerMovesCalendar: "/img/power-moves-calendar-1@2x.png",
    weeklyUpdates: "Weekly Updates",
    eachUpdateConsists1: "Each update consists of its own weekly theme and activites, so you are in constant exposre to the amazing stuff around you.",
    olGardeningTogether: "/img/ol--gardening-together-1@2x.png",
    growthAndCare: "Growth And Care",
    eachUpdateConsists2: "Each update consists of its own weekly theme and activites, so you are in constant exposre to the amazing stuff around you.",
    croodsComments: "/img/croods-comments-1@2x.png",
    community: "Community",
    eachUpdateConsists3: "Each update consists of its own weekly theme and activites, so you are in constant exposre to the amazing stuff around you.",
    coolKidsStudy: "/img/cool-kids-study@2x.png",
    newsLetterProps: newsLetter3Data,
};

const discoverButton3Data = {
    className: "discover-button-13",
};

const discoverButton22Data = {
    className: "discover-button-15",
};

const iPhone81Data = {
    overlapGroup: "/img/unsplash-zywe8a1xpzi-3@2x.png",
    theFutureOfInformationIsHere: <React.Fragment>The Future of Information<br />is HERE</React.Fragment>,
    powerMovesCalendar: "/img/power-moves-calendar-3@2x.png",
    weeklyUpdates: "Weekly Updates",
    eachUpdateConsists1: "Each update consists of its own weekly theme and activites, so you are in constant exposre to the amazing stuff around you.",
    olGardeningTogether: "/img/ol--gardening-together-3@2x.png",
    growthAndCare: "Growth And Care",
    eachUpdateConsists2: "Each update consists of its own weekly theme and activites, so you are in constant exposre to the amazing stuff around you.",
    croodsComments: "/img/croods-comments-3@2x.png",
    community: "Community",
    eachUpdateConsists3: "Each update consists of its own weekly theme and activites, so you are in constant exposre to the amazing stuff around you.",
    yourStoryYourWay: "Your Story, Your Way",
    ourWebsiteEnables: "Our Website, enables the abblity to accesss and discover companies and resources. Our product is free, fun and easy to use.",
    coolKidsStudy: "/img/cool-kids-study-3@2x.png",
    discoverButtonProps: discoverButton3Data,
    discoverButton2Props: discoverButton22Data,
};

const navBar62Data = {
    className: "nav-bar-6",
};

const tabletAboutData = {
    whyThisMatters: "Why This Matters?",
    spanText: <React.Fragment><br />Ask yourself this: Have you ever thought about something and it seems impossible to get to?  Are you, a family member, or friend in need of help or assistance and are not sure where to go? Maybe you are going thourgh a tough time and need help getting out? <br /><br />The Team at KIDO Resources understands. This is why we exist to change the narrtive. We want to bring Companies and Partners to the community in a diffrent way. Establish a single place to find all the information you need. Have a friend or family memebr that needs help. Send them here! Know a company that deserves all the love from the community. Send them here! <br /><br />We are a platform for everything and can not wait to show this off to the world.</React.Fragment>,
    team: "Team",
    unsplash5Aguycw_Pjw1: "/img/unsplash-5aguycw-pjw@2x.png",
    christwideOscar: "Christwide Oscar",
    heyMyNameIsChri: "Hey, My name is Christwide. Most Call me Christ, I am the CEO and Founder of KIDO. Super fast backstory, I worked in a low income school here in Denton. Which my good friend Nate, introduced me too. I realised there was a huge problem. Lots of people didn’t know what stuff they had access to in their community. If they did, the process was super long and confusing. This is Where KIDO Resources steps in. We come to change that and make the process simpler and bring it to one place. So no more hiding, lets take charge and change the way we get information.",
    name: "Nathan Stewart",
    welcomeToKidoReso: "Welcome to KIDO Resources! I am one of the creators as well as the chief information officer. I have a degree in child development and have worked in a child care setting for 4 years. At the moment I am studying to become an occupational therapist. These areas of education have given me the opportunity to work with many amazing families. A fun note is that I enjoy nature and believe everyone deserves to have the time to enjoy the outdoors with their families.t",
    unsplash5Aguycw_Pjw2: "/img/unsplash-5aguycw-pjw-1@2x.png",
    navBarProps: navBar62Data,
};

const navBar63Data = {
    className: "nav-bar-7",
};

const loginInfoVariant22Data = {
    medium_Ccexpress3: "/img/medium-ccexpress-3-1@2x.png",
    username: "Username",
    enterUsername: "Enter Username...",
    password: "Password",
    enterPassword: "Enter Password...",
    login: "Login",
};

const tabletLoginData = {
    loginInfoVariant22Props: navBar63Data,
    loginInfoVariant22Props2: loginInfoVariant22Data,
};

const navBar64Data = {
    className: "nav-bar-8",
};

const discoverButton422Data = {
    className: "discover-button-3",
};

const discoverButton522Data = {
    className: "discover-button-5",
};

const discoverButton622Data = {
    className: "discover-button-7",
};

const discoverButton722Data = {
    className: "discover-button-9",
};

const card22Data = {
    dentonCityCountyDaySchool: "Denton City County Day School",
    rectangle4: "/img/rectangle-4-6@2x.png",
    className: "",
};

const card23Data = {
    dentonCityCountyDaySchool: "Fred Moore Child Care Center",
    rectangle4: "/img/rectangle-4-7@2x.png",
    className: "card-variant4-3-1",
};

const card24Data = {
    dentonCityCountyDaySchool: "Health Services Of North Texas",
    rectangle4: "/img/rectangle-4-8@2x.png",
    className: "card-variant4-3-2",
};

const cards1Data = {
    card21Props: card22Data,
    card22Props: card23Data,
    card23Props: card24Data,
};

const card25Data = {
    dentonCityCountyDaySchool: "Nubby Pediatrics",
    rectangle4: "/img/rectangle-4-9@2x.png",
    className: "card-9",
};

const card26Data = {
    dentonCityCountyDaySchool: "Altitude Trampoline Park",
    rectangle4: "/img/rectangle-4-10@2x.png",
    className: "card-variant4-3-3",
};

const card27Data = {
    dentonCityCountyDaySchool: "Water Works Park",
    rectangle4: "/img/rectangle-4-11@2x.png",
    className: "card-variant4-3",
};

const cards2Data = {
    className: "cards-3",
    card21Props: card25Data,
    card22Props: card26Data,
    card23Props: card27Data,
};

const tabletDiscoverPageActualData = {
    navBarProps: navBar64Data,
    discoverButton4Props: discoverButton422Data,
    discoverButton5Props: discoverButton522Data,
    discoverButton6Props: discoverButton622Data,
    discoverButton7Props: discoverButton722Data,
    cards1Props: cards1Data,
    cards2Props: cards2Data,
};

const locationButton2Data = {
    className: "location-button-1",
};

const aboutUs2Data = {
    className: "about-us-2",
};

const detailsCard3Data = {
    rectangle7: "/img/rectangle-7@1x.png",
    className: "details-card-1",
};

const detailsCard22Data = {
    className: "details-card-3",
};

const tabletDCCDSData = {
    dentonCityCountyDaySchool: "Denton City County Day School",
    rectangle6: "/img/rectangle-6@1x.png",
    loremIpsumDolorSi: <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet libero nec nulla porttitor suscipit. Morbi aliquam tempus erat, lacinia mattis eros porttitor a. Aliquam aliquam purus dolor, vitae dictum nisi efficitur vitae. Duis in orci laoreet, dignissim ligula eu, ultricies nunc. Sed in egestas magna, sit amet luctus augue. Nam et quam quis massa ornare vestibulum eget in metus. Sed nec ligula magna.<br /><br />Aenean sit amet nunc pellentesque, maximus libero dignissim, mattis quam. Donec massa metus, blandit et tincidunt volutpat, sagittis sit amet dui. Phasellus et arcu lacus. Nunc rutrum neque eget purus accumsan vehicula. In nec felis nec ligula dignissim posuere. Nunc ac sapien a nunc sodales ornare sed eget lacus. Etiam feugiat ultrices dolor vestibulum tempus. Suspendisse a lectus ipsum. Suspendisse ultrices interdum aliquet. Praesent rutrum arcu ut nisi cursus, sit amet ornare quam fermentum. Aenean et fringilla justo.</React.Fragment>,
    whatWeOffer: "What We Offer",
    detailsCardProps: locationButton2Data,
    detailsCardProps3: aboutUs2Data,
    detailsCardProps4: detailsCard3Data,
    detailsCardProps5: detailsCard22Data,
};

