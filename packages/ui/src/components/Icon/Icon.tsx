import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type AvailableIcons = 'loading';

// TODO: Can I DRY this up a bit? This is required for typedefs to generate
export const ICONS: Record<AvailableIcons, IconDefinition> = {
  loading: faSpinner,
};

export interface IconProps {
  className?: string;
  /** The name of the icon */
  icon: keyof typeof ICONS;
}

/** A bundle-friendly wrapper around FontAwesome that exposes a few select icons */
function Icon({ className, icon }: IconProps) {
  return <FontAwesomeIcon className={className} data-testid={`icon-${icon}`} icon={ICONS[icon]} />;
}

export default Icon;
