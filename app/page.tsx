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
    </div>
  );
}
