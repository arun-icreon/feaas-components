import * as FEAAS from "@sitecore-feaas/clientside/react";
import style from "./page.module.css";

export default async function ExternalComponents() {
  return (
    <div className={style.page}>
      {/*
        Important to include this on the page (preferrably in layout) so
        clientside bundle is properly prepared by Next.
      */}
      <h1>Rendering BYOC components</h1>
      <p>External components can be rendered directly in react tree</p>
      <br />
      <br />
      <section>
        <FEAAS.ExternalComponent
          className={style.appRouter}
          componentName="TitleDescriptionWithImageAndLink"
          text="Test"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          imageUrl="https://compote.slate.com/images/5294e6d0-53ed-4a4a-a350-7eaeab72ac93.jpeg"
          url="https://www.google.co.in"
          urlText="Read More"
        />
      </section>
      <h1>In FEAAS component</h1>
      <p>
        External components can be also rendered as a part of FEAAS component or
      </p>
      <FEAAS.ServerComponent
        template={`<section>
       
       
        <feaas-external data-external-id="TitleDescriptionWithImageAndLink" 
        data-attributes-keys="description,url,url-text,image-url,text" 
        data-attributes="{&quot;description&quot;:&quot;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.&quot;,&quot;url&quot;:&quot;https://www.lipsum.com/&quot;,&quot;url-text&quot;:&quot;Read More&quot;,&quot;image-url&quot;:&quot;https://edge.sitecorecloud.io/acrisurellc1-acrisure-prod-0dbe/media/Project/Acrisure/Acrisure-Site/Master-Site/Pages/Homepage/Homepage-Hero-01.png?h=873&amp;iar=0&amp;w=1552&quot;,&quot;text&quot;:&quot;Lorem Ipsum Title&quot;}" data-embed-title="Title Description With Image and Link Component" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." image-url="https://edge.sitecorecloud.io/acrisurellc1-acrisure-prod-0dbe/media/Project/Acrisure/Acrisure-Site/Master-Site/Pages/Homepage/Homepage-Hero-01.png?h=873&amp;iar=0&amp;w=1552" text="Lorem Ipsum Title" url-text="Read More" url="https://www.lipsum.com/" class="-component" sitecore-edge-url="https://edge-platform.sitecorecloud.io" sitecore-edge-context-id="25bbJulpmoGT9IJCUda1fY" hydrate="false" is-initialized="true" site-name="sxa-poc-app" page-state="preview"></feaas-external>
        
        
        </section>`}
      />
    </div>
  );
}
