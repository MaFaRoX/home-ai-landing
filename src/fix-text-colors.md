# Text Color Fixes for Dark Mode

## Pattern Replacements:

### Primary Text (Headings, Titles)
- FROM: `text-white dark:text-white light:text-gray-900`
- TO: `text-gray-900 dark:text-white`

### Secondary Text (Descriptions)  
- FROM: `text-gray-300 dark:text-gray-300 light:text-gray-600`
- TO: `text-gray-600 dark:text-gray-200`

### Tertiary Text (Labels, Small text)
- FROM: `text-gray-400 dark:text-gray-400 light:text-gray-600`
- TO: `text-gray-600 dark:text-gray-300`

### Colored Headings (Special cases)
- FROM: `text-white dark:text-white light:text-blue-600`
- TO: `text-blue-600 dark:text-white`

- FROM: `text-white dark:text-white light:text-red-600`
- TO: `text-red-600 dark:text-white`

## Files to Update:
1. FamilyTreeIntro.tsx
2. HealthIndexIntro.tsx
3. LoginModal.tsx
4. FloatingContact.tsx
5. MissionModal.tsx
6. CoreValuesModal.tsx
7. ServiceCards.tsx
8. HomeAIHeader.tsx (already partially done)
