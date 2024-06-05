import React from "react";
import * as FEAAS from "@sitecore-feaas/clientside/react";
import style from "../TitleComponent.module.css";
interface TitleDescriptionWithImageAndLinkComponentProps {
  imageUrl: string;
  text: string;
  description: string;
  url: string;
  urlText: string;
}

//export const TitleDescriptionWithImageAndLinkComponent =
export default function TitleDescriptionWithImageAndLinkComponent(
  props: TitleDescriptionWithImageAndLinkComponentProps
) {
  return (
    <div className={`component promo col-12 link_button ${style.link_button}`}>
      <div className="component-content">
        <div className={style.two_col}>
          <div className={style.left}>
            {props.url ? (
              <div className={style.field_Title}>
                <a href={props.url} title={props.urlText} target="_blank">
                  <span title={props.urlText}>{props.text}</span>
                </a>
              </div>
            ) : (
              <p className={style.field_para}>{props.text}</p>
            )}

            <p>{props.description}</p>
          </div>
          <div className={style.field_promotext}>
            {props.imageUrl && (
              <img alt="" width="300" height="300" src={props.imageUrl} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

FEAAS.External.registerComponent(TitleDescriptionWithImageAndLinkComponent, {
  name: "TitleDescriptionWithImageAndLink",
  title: "Title Description With Image and Link Component",
  description: "Title Description With Image and Link Component",
  thumbnail:
    "https://feaasstatic.blob.core.windows.net/assets/thumbnails/byoc.svg",
  group: "SUGCON",
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
