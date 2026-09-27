import {
  lucideBookCopy,
  lucideCode,
  lucideFiles,
  lucideFolderBookmark,
  lucideNotebook,
  lucidePencilLine,
} from '@ng-icons/lucide';
import { environment } from '../environments/environment';

export const homelabIcons = {
  lucideNotebook,
  lucideFolderBookmark,
  lucideBookCopy,
  lucidePencilLine,
  lucideCode,
  lucideFiles,
};

export interface HomelabLink {
  title: string;
  url: string;
  icon: keyof typeof homelabIcons;
}

export const homelabLinks: HomelabLink[] = [
  { title: 'MDArchive', url: environment.mdarchiveUrl, icon: 'lucideNotebook' },
  { title: 'Jellyfin', url: environment.jellyfinUrl, icon: 'lucideFolderBookmark' },
  { title: 'Kavita', url: environment.kavitaUrl, icon: 'lucideBookCopy' },
  { title: 'AFFiNe', url: environment.affineUrl, icon: 'lucidePencilLine' },
  { title: 'Marimo', url: environment.marimoUrl, icon: 'lucideCode' },
  { title: 'Overleaf', url: environment.overleafUrl, icon: 'lucideFiles' },
];
