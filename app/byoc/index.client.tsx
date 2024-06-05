"use client";
/**
 * Required boilerplate for BYOC clientside bundle.
 *
 * DO NOT REMOVE
 */
import * as FEAAS from "@sitecore-feaas/clientside/react";
export default (props: any) => {
  debugger;
  return FEAAS.ExternalComponent(props);
};

/**
 * Add imports to BYOC components that you would like to be rendered on server below.
 * Clientside components are used for user interactivity.
 */

// Serverside component that contains another clientside component
import "./TitleDescriptionWithImageAndLinkComponent";
