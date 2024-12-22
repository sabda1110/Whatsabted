'use client';

import '@mdxeditor/editor/style.css';
// InitializedMDXEditor.tsx
import { useState, useEffect, type ForwardedRef } from 'react';
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  CodeToggle,
  type MDXEditorMethods,
  type MDXEditorProps
} from '@mdxeditor/editor';

// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: {
  editorRef: ForwardedRef<MDXEditorMethods> | null | any;
} & MDXEditorProps) {
  const [value, setValue] = useState('');

  const handleChange = () => {
    const markdown = editorRef?.current?.getMarkdown();
    console.log(markdown, 'sabdaa');
    setValue(markdown as string);
  };

  console.log(value, 'sabda value');
  return (
    <MDXEditor
      plugins={[
        // Example Plugin Usage
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarClassName: 'my-classname',
          toolbarContents: () => (
            <>
              {' '}
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <CodeToggle />
            </>
          )
        })
      ]}
      {...props}
      contentEditableClassName="prose prose-neutral	 max-w-none mdx-editor"
      ref={editorRef}
      onChange={(value) => {
        console.log(value, 'sabda testing');
      }}
    />
  );
}
