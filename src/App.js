import { BrowserRouter as Router, Route } from "react-router-dom";
import { pageRoutes } from "./constants/pageRoutes";
import { NewCollections } from "./pages/NewCollections/NewCollections";
import { Women } from "./pages/Women/Women";
import { Men } from "./pages/Men/Men";
import { Kids } from "./pages/Kids/Kids";
import { Contacts } from "./pages/Contacts/Contacts";
import { Home } from "./pages/Home/Home";
import { VideoPlayerPage } from "./pages/VideoPlayerPage/VideoPlayerPage";

const App = () => {
	return (
		<>
			<Router>
				<Route
					exact
					path={pageRoutes.NEW_COLLECTIONS}
					component={NewCollections}
				></Route>
				<Route exact path={pageRoutes.WOMEN} component={Women} />
				<Route exact path={pageRoutes.MEN} component={Men} />
				<Route exact path={pageRoutes.KIDS} component={Kids} />
				<Route exact path={pageRoutes.CONTACTS} component={Contacts} />
				<Route exact path={pageRoutes.HOME} component={Home} />
				<Route
					exact
					path={pageRoutes.VIDEOPLAYER}
					component={VideoPlayerPage}
				/>
			</Router>
		</>
	);
};

export default App;
