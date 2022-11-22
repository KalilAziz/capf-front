import { Accordion, Text } from '@capfds-ui/react'
import Image from 'next/image'
import NotImageManagement from '../../assets/images/NotImageManagement.png'
import { ContentContainer } from './styles'
export const Management = ({ managers }) => {
  return (
    <div style={{ margin: '3rem 0' }}>
      <Accordion.Root type="single" defaultValue="" collapsible={true}>
        {managers.map((manager, key) => (
          <Accordion.Item value={String(manager.id)} key={key}>
            <Accordion.Trigger>
              <Text css={{ color: 'white' }}>
                <strong> {manager.Management_Year} </strong>
              </Text>
            </Accordion.Trigger>
            {manager.Manager.map((manager, key) => {
              console.log(manager.Manager_image.data)
              return (
                <Accordion.Content key={key}>
                  {manager.id % 2 === 0 ? (
                    <ContentContainer>
                      {String(manager.Manager_image.data) === 'null' ? (
                        <Image src={NotImageManagement} alt="" />
                      ) : (
                        <Image
                          src={manager.Manager_image.data.attributes.url}
                          width={manager.Manager_image.data.attributes.width}
                          height={manager.Manager_image.data.attributes.height}
                          alt=""
                        />
                      )}
                      <div
                        className="contentManager"
                        style={{
                          textAlign: 'right',
                        }}
                      >
                        <Text colors="yellow900" size="2xl">
                          <strong>{manager.Manager_Field}</strong>
                        </Text>
                        <Text colors="green50" size="lg">
                          {manager.Manager_Name}
                        </Text>
                      </div>
                    </ContentContainer>
                  ) : (
                    <ContentContainer>
                      <div className="contentManager">
                        <Text colors="yellow900" size="2xl">
                          <strong>{manager.Manager_Field}</strong>
                        </Text>
                        <Text colors="green50" size="lg">
                          {manager.Manager_Name}
                        </Text>
                      </div>
                      {String(manager.Manager_image.data) === 'null' ? (
                        <Image src={NotImageManagement} alt="" />
                      ) : (
                        <Image
                          src={manager.Manager_image.data.attributes.url}
                          width={manager.Manager_image.data.attributes.width}
                          height={manager.Manager_image.data.attributes.height}
                          alt=""
                        />
                      )}
                    </ContentContainer>
                  )}
                </Accordion.Content>
              )
            })}
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  )
}
