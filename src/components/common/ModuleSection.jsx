import PropTypes from 'prop-types'

export default function ModuleSection({ eyebrow, title, description, children }) {
  return (
    <section className="integrated-module">
      <header className="integrated-module__header">
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        {description && <span>{description}</span>}
      </header>
      {children}
    </section>
  )
}

ModuleSection.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
}

ModuleSection.defaultProps = {
  description: '',
}
