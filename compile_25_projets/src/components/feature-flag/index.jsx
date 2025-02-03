import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import RandomColor from "../random_color";
import Accordian from "../accordeon";
import TreeView from "../tree-view";
import { useContext } from "react";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";

export default function FeatureFlags() {
    const { loading, enabledFlags } = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <LightDarkMode />,
        },
        {
            key: "showTicTacToeBoard",
            component: <TicTacToe />,
        },
        {
            key: "showRandomColorGenerator",
            component: <RandomColor />,
        },
        {
            key: "showAccordian",
            component: <Accordian />,
        },
        {
            key: "showTreeView",
            component: <TreeView menus={menus} />,
        },
    ];

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey];
    }

    if (loading) {
        return (
            <h1>Données en cours de chargement. Veuillez patienter svp! </h1>
        );
    }
    return (
        <div>
            <h1>Feature Flags</h1>
            {componentsToRender.map((componentItem) =>
                checkEnabledFlags(componentItem.key)
                    ? componentItem.component
                    : null
            )}
        </div>
    );
}
