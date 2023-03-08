import RadiusBox from './RadiusBox';

const text_color_light = 'text-gray-200';

export default function Banner({ banner }) {
  return (
    <RadiusBox>
      <section className={`${text_color_light}`}>
        <div className="flex justify-center item-center p-6">
          <h1 className="text-2xl font-medium ">{banner}</h1>
        </div>
      </section>
    </RadiusBox>
  );
}
