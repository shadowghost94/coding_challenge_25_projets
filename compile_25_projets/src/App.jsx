import "./App.css";
import Accordian from "./components/accordeon";
import RandomColor from "./components/random_color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutoComplete from "./components/search-autocomplete-with-api";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";

function App() {
    return (
        <>
            {/* import du composant générateur de QRCode */}
            {/* <QRCodeGenerator /> */}

            {/* LightAndDark */}
            {/* <LightDarkMode /> */}

            {/* Notre composants d'accordéon */}
            {/* <Accordian /> */}

            {/* Random Color Component */}
            {/* <RandomColor /> */}

            {/* Star-Rating Component */}
            {/* <StarRating noOfStars={10} /> */}

            {/* Image Slider */}
            {/* <ImageSlider
                url={"https://picsum.photos/v2/list"}
                page={"1"}
                limit={"10"}
            /> */}

            {/* Load more products components */}
            {/* <LoadMoreData /> */}

            {/* TreeView Component / menu UI component / Navigation récursive */}
            {/* <TreeView menus={menus} /> */}

            {/* Scroll Indicator */}
            {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

            {/* Tab Test component  */}
            {/* <TabTest /> */}

            {/* Custom modal component */}
            {/* <ModalTest /> */}

            {/* Rechercher un utilisateur avec l'api de github */}
            {/* <GithubProfileFinder /> */}

            {/* Recherche avec autocompletion */}
            {/* <SearchAutoComplete /> */}

            {/* Jeux TicTacToe */}
            {/* <TicTacToe /> */}

            {/* Implémentation des feature flags */}
            <FeatureFlagGlobalState>
                <FeatureFlags />
            </FeatureFlagGlobalState>
        </>
    );
}

export default App;
