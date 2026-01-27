import { FunctionComponent } from "react";
import { Card, CardBody } from "@patternfly/react-core";
import { SearchIcon, TimesIcon, PlusCircleIcon } from "@patternfly/react-icons";
import { Button } from "../../lib/common";

/**
 * Demo component showcasing the Button component with various configurations.
 */
export const ButtonDemo: FunctionComponent<any> = () => {
    return (
        <div>
            <Card ouiaId="ButtonDemo">
                <CardBody>
                    <h2>Button Component Demo</h2>
                    
                    <h3>Icon-only Buttons (with aria-label)</h3>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                        <Button 
                            icon={<TimesIcon />} 
                            aria-label="Close dialog" 
                            variant="plain"
                        />
                        <Button 
                            icon={<SearchIcon />} 
                            aria-label="Search" 
                            variant="control"
                        />
                        <Button 
                            icon={<PlusCircleIcon />} 
                            aria-label="Add item" 
                            variant="primary"
                        />
                    </div>

                    <h3>Buttons with Icon and Text</h3>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                        <Button 
                            icon={<SearchIcon />} 
                            variant="primary"
                        >
                            Search
                        </Button>
                        <Button 
                            icon={<PlusCircleIcon />} 
                            variant="secondary"
                        >
                            Add New
                        </Button>
                    </div>

                    <h3>Regular Text Buttons</h3>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="tertiary">Tertiary</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="link">Link</Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};
