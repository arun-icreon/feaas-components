import React from "react";
import * as FEAAS from "@sitecore-feaas/clientside/react";
import style from "../TitleComponent.css";
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
        <div>
          <div style={{ width: "500px" }}>
            {props.url ? (
              <div className={style.field - promolink}>
                <a href={props.url} title={props.urlText} target="_blank">
                  <p className="field-Title" title={props.urlText}>
                    {props.text}
                  </p>
                </a>
              </div>
            ) : (
              <p style={{ fontweight: 900, width: "500px" }}>{props.text}</p>
            )}

            <p style={{ width: "800px" }}>{props.description}</p>
          </div>
          <div className="field-promotext">
            {props.imageUrl && (
              <img alt="" width="300" height="300" src={props.imageUrl} />
            )}
          </div>
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
