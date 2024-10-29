import React from "react";
import {Box, Flex} from "@radix-ui/themes";
import "./Layout.css";

interface LayoutProps {
    mainComponent: React.ReactNode;
    sidebarComponent: React.ReactNode;
    mainComponentTitle: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div className="layout-container">
            <Flex
                gap={{ initial: "0", md: "5" }}
                direction={{ initial: "column", md: "row" }}
                justify="center"
            >
                <Box width={{ md: "55vw" }}>
                    {props.mainComponentTitle}
                    {props.mainComponent}
                </Box>
                <Box
                    width={{ md: "45vw" }}
                >
                    {props.sidebarComponent}
                </Box>
            </Flex>
        </div>
    );
}

export default Layout;