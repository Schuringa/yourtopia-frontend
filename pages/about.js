import Default from '../layouts/default'
import '../css/index.scss'
const meta = { title: 'About us', description: 'Staging site' }

export default () => (
  <Default meta={meta}>
    <div className="columns">
      <div className="column has-text-centered">
        <h3 className="title is-size-6">About</h3>
        <p className="is-size-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          tincidunt, purus sed semper luctus, justo tortor dictum quam, cursus
          pharetra urna urna nec odio. Nullam ac sagittis nibh. Aenean nisi
          purus, accumsan mattis placerat eget, ultrices eget orci. Sed
          tincidunt, diam id volutpat efficitur, elit erat mattis elit,
          convallis suscipit lectus lectus iaculis justo. In ac dictum erat.
          Praesent non diam vel felis tristique tempor vel non massa. Morbi
          lobortis nulla vel tortor fermentum placerat. Mauris volutpat ut velit
          a tincidunt. Etiam in odio tempor, faucibus tortor vel, ornare est.
          Quisque pulvinar leo quis hendrerit auctor. Donec nisl sem,
          sollicitudin at porttitor eu, malesuada ac ex. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Nulla accumsan nisl placerat erat
          auctor aliquam.
        </p>
      </div>
    </div>
  </Default>
)
