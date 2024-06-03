import React from "react";
import * as FEAAS from "@sitecore-feaas/clientside/react";

interface TitleDescriptionWithImageAndLinkComponentProps {
  imageUrl: string;
  text: string;
  description: string;
  url: string;
  urlText: string;
}

export const TitleDescriptionWithImageAndLinkComponent = (
  props: TitleDescriptionWithImageAndLinkComponentProps
): JSX.Element => {
  return (
    <div className="component promo col-12 link-button">
      <div className="component-content">
        <div className="field-promoicon">
          {props.imageUrl && (
            <img alt="" width="300" height="300" src={props.imageUrl} />
          )}
        </div>
        <div className="promo-text">
          <div>
            <div className="field-promotext">
              <div>
                <p>{props.text}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="field-promotext">
              <div>
                <p>{props.description}</p>
              </div>
            </div>
          </div>
          {props.url && (
            <div className="field-promolink">
              <a href={props.url} title={props.urlText} target="_blank">
                {props.urlText}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

FEAAS.External.registerComponent(TitleDescriptionWithImageAndLinkComponent, {
  name: "TitleDescriptionWithImageAndLink",
  title: "Title Description With Image and Link Component",
  description: "Title Description With Image and Link Component",
  thumbnail:
    "https://feaasstatic.blob.core.windows.net/assets/thumbnails/byoc.svg",
  group: "BYOC - External",
  required: ["text", "imageUrl", "url"],
  properties: {
    imageUrl: {
      type: "string",
    },
    text: {
      type: "string",
    },
    description: {
      type: "string",
    },
    url: {
      type: "string",
    },
    urlText: {
      type: "string",
    },
  },
  ui: {
    text: {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:placeholder": "Write a great Promo text",
    },
    description: {
      "ui:widget": "textarea",
    },
  },
});
