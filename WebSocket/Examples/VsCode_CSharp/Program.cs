using System.Text;
using Websocket.Client;

// select one of the loggers below
var loggerType = "MessageLogger";
//var loggerType = "DataLogger";
//var loggerType = "RawDataLogger";

var exitEvent = new ManualResetEvent(false);

// change the hostname to your drive chacker host name
// hint: the default hostname is "gateway-serialnumber"
var hostname = "gateway-2450d00815";
var url = new Uri("ws://" + hostname + ":81/" + loggerType);

while (true)
{
    try
    {
        using (var client = new WebsocketClient(url))
        {
            client.ReconnectTimeout = TimeSpan.FromSeconds(5);
            client.ReconnectionHappened.Subscribe(info =>
                Console.WriteLine($"Reconnection happened, type: {info.Type}"));

            
            client.MessageReceived.Subscribe(msg =>
            {
                string data = "";
                if (msg.Binary != null)
                {
                    if (loggerType == "RawDataLogger")
                        data = Rdc.RdcPayloadFrame.FromByteArray(msg.Binary)?.ToString();
                    else
                        data = Encoding.Default.GetString(msg.Binary);

                    Console.WriteLine(data);
                }
                else if (msg.Text != null)
                {
                    Console.WriteLine(msg.Text);
                }
            });
            await client.Start();

            await Task.Run(() => client.Send("{ message }"));

            exitEvent.WaitOne();
            // await client.Stop(System.Net.WebSockets.WebSocketCloseStatus.NormalClosure, string.Empty);

            Task.Delay(200).Wait();
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
    }
}