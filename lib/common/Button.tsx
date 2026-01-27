import React, { FunctionComponent } from "react";
import { Button as PFButton, ButtonProps as PFButtonProps } from "@patternfly/react-core";

/**
 * Properties for the Button component.
 * Extends PatternFly Button properties to add icon support.
 */
export type ButtonProps = PFButtonProps & {
    /**
     * Optional icon to display in the button.
     * When used without children, the button becomes icon-only and aria-label becomes required.
     */
    icon?: React.ReactNode;
};

/**
 * A wrapper around PatternFly's Button component that adds support for icon-only buttons
 * with proper ARIA labels for accessibility.
 * 
 * @example
 * // Icon-only button (requires aria-label)
 * <Button icon={<CloseIcon />} aria-label="Close dialog" />
 * 
 * @example
 * // Button with icon and text
 * <Button icon={<SearchIcon />}>Search</Button>
 * 
 * @example
 * // Regular text button
 * <Button variant="primary">Click me</Button>
 */
export const Button: FunctionComponent<ButtonProps> = ({ icon, children, ...props }: ButtonProps) => {
    // Render button with icon only
    if (icon && !children) {
        return (
            <PFButton {...props}>
                {icon}
            </PFButton>
        );
    }
    
    // Render button with icon and children
    if (icon && children) {
        return (
            <PFButton {...props}>
                {icon} {children}
            </PFButton>
        );
    }
    
    // Render regular button
    return (
        <PFButton {...props}>
            {children}
        </PFButton>
    );
};
