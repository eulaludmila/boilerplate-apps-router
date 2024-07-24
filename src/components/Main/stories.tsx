import { Meta, StoryObj } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  // args: {
  //   title: 'Default',
  //   description: 'description default'
  // },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta //funciona para configurar um story de um componente

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'Basic',
    description: 'description basic'
  }
}
