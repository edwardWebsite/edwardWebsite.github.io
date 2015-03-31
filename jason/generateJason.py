def generateJason(edgelist, output):
	File = open(edgelist)
	

	DictEdge = {}
	DictNode = {}
	for line in File:
		nodes = line.split(' ')
		nodeA = nodes[0].split("\n")[0]
		nodeB = nodes[1].split("\n")[0]
		try:
			DictNode[nodeA] += 1
		except:
			DictNode[nodeA] = 0
		try:
			DictNode[nodeB] += 1
		except:
			DictNode[nodeB] = 0
		try:
			DictEdge[nodeA].append(nodeB)
		except:
			DictEdge[nodeA] = [nodeB]

	File.close()

	Out = open(output,'w')
	Out.write("{\n\"nodes\":[\n")

	for item in DictNode:

		items =item.split("\n")

		Out.write("\t{\"name\":\""+items[0]+"\",\"group\":1},\n")
	Out.write("],\n")

	Out.write("\"links\":[\n")
 


	for item in DictEdge:
		for i in DictEdge[item]:
			a = i.split("\n")
			Out.write("\t{\"source\":"+item+",\"target\":"+a[0]+",\"value\":1},\n")

	Out.write("\n]\n}")

generateJason("../edgeList/save42.txt",'./Save42.json')