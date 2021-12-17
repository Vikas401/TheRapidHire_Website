import React from "react-router";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AdminMain from "./AdminMain";
const Dashboard = () => {
  const [navBar, setNavBar] = useState([]);
  const [heroBox, setHerobox] = useState("");
  const [story, setStory] = useState("");
  const [service, setService] = useState("");
  const [technologys, setTechnologys] = useState("");
  const [software, setSoftware] = useState("");
  const [overview, setOverview] = useState("");
  const [feature, setFeature] = useState("");
  const [trusted, setTrusted] = useState("");
  const [team, setTeam] = useState("");
  const [about, setAbout] = useState("");
  const [services, setServices] = useState("");
  const [features, setFeatures] = useState("");
  const [technology, setTechnology] = useState("");
  const [teams, setTeams] = useState("");
  const [career, setCareer] = useState("");
  const [footercontact, setFootercontact] = useState("");
  const [ourtechnology, setOurtechnology] = useState("");
  const [experience, setExperience] = useState("");
  const [companyperks, setCompanyperks] = useState("");
  const [excited, setExcited] = useState("");
  const [selectedMenuItemId, setselectedMenuItemId] = useState(null);
  const [selectedMenuItemName, setselectedMenuItemName] = useState(null);
  const [currentDeleteListId, setCurrentDeleteListId] = useState(null);
  const history = useHistory();
  const API = "https://therapidhiredev.herokuapp.com";
  useEffect( async () => {
    const isAuthenticated = localStorage.getItem("myData");
      if(isAuthenticated != "admin"){
        history.push('/login');
      }else{
        history.push('/admin/dashboard');
      }
      const { data: navBar } = await axios.get(`${API}/navbar/`);
      setNavBar(navBar);
      console.log("navBar: ", navBar);
      const { data: heroBox } = await axios.get(`${API}/banner/`);
      setHerobox(heroBox);
      const { data: story } = await axios.get(`${API}/Home/`);
      setStory(story);
      const { data: service } = await axios.get(`${API}/serviceChild/`);
      setService(service);
      const { data: technologys } = await axios.get(`${API}/technologyChild/`);
      setTechnologys(technologys);
      const { data: software } = await axios.get(`${API}/lifeCycle/`);
      setSoftware(software);
      const { data: overview } = await axios.get(`${API}/overview/`);
      setOverview(overview);
      const { data: feature } = await axios.get(`${API}/featuresChild/`);
      setFeature(feature);
      const { data: trusted } = await axios.get(`${API}/review/`);
      setTrusted(trusted);
      const { data: team } = await axios.get(`${API}/innovativeTeam/`);
      setTeam(team);
      const { data: about } = await axios.get(`${API}/about/`);
      setAbout(about);
      const { data: services } = await axios.get(`${API}/service/`);
      setServices(services);
      const { data: features } = await axios.get(`${API}/feature/`);
      setFeatures(features);
      const { data: technology } = await axios.get(
        `${API}/tecnologyExpertise/`
      );
      setTechnology(technology);
      const { data: teams } = await axios.get(`${API}/testimonial/`);
      setTeams(teams);
      const { data: career } = await axios.get(`${API}/CareerOurValue/`);
      setCareer(career);
      const { data: footercontact } = await axios.get(`${API}/footerBanner/`);
      setFootercontact(footercontact);
      const { data: ourtechnology } = await axios.get(`${API}/ourTechnology/`);
      setOurtechnology(ourtechnology);
      const { data: companyperks } = await axios.get(`${API}/companyPerk/`);
      setCompanyperks(companyperks);
      const { data: excited } = await axios.get(`${API}/excitedWorkUs/`);
      setExcited(excited);
      const { data: experience } = await axios.get(`${API}/teams/`);
      setExperience(experience);
     
  }, []);
 
  const addNewData = (title, body, alt, name) => {
    const data = {
      title: title,
      body: body,
      alt: alt,
    };
    setselectedMenuItemName(name);
    axios.post(`${API}/${name}/`, data).then((res) => console.log(res));
  };
  const deleteFunction = (selectedId) => {
    if (selectedId) {
      setselectedMenuItemId(selectedId);
      axios
        .delete(`${API}/${selectedMenuItemName}/${selectedId}`)
        .then((res) => console.log(res));
    }
  };
  return (
    <div>
      <AdminMain
        navBar={navBar}
        heroBox={heroBox}
        story={story}
        service={service}
        technologys={technologys}
        software={software}
        overview={overview}
        feature={feature}
        trusted={trusted}
        team={team}
        about={about}
        services={services}
        features={features}
        technology={technology}
        teams={teams}
        career={career}
        footercontact={footercontact}
        ourtechnology={ourtechnology}
        companyperks={companyperks}
        experience={experience}
        excited={excited}
        addNewData={addNewData}
        deleteFunction={deleteFunction}
        setselectedMenuItemName={setselectedMenuItemName}
        setCurrentDeleteListId={setCurrentDeleteListId}
      />
    </div>
  );
};

export default Dashboard;
