import RadiusLayoutItem from './RadiusLayoutItem';

const text_color_light = 'text-gray-200';

export default function Banner({ banner }) {
  return (
    <RadiusLayoutItem>
      <section className={`${text_color_light}`}>
        <div className="flex justify-center item-center p-6">
          <h1 className="text-md font-medium ">{banner}</h1>
        </div>
      </section>
    </RadiusLayoutItem>
  );
}
